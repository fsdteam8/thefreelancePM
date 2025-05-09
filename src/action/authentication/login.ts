"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { loginFormSchema, LoginFormValues } from "@/schemas/auth";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function loginAction(data: LoginFormValues) {
  const { success, data: parsedData, error } = loginFormSchema.safeParse(data);

  if (!success) {
    return {
      success: false,
      message: error.message,
    };
  }

  // Check if the user exists
  const user = await prisma.user.findFirst({
    where: {
      email: parsedData.email as string,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User Not Found!",
    };
  }

  if (!user.emailVerified) {
    return {
      success: false,
      message:
        "Your email is not verified. Please check your inbox and verify your email address before logging in.",
    };
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(
    parsedData.password as string,
    user.password,
  );

  if (!isPasswordValid) {
    return {
      success: false,
      message: "Password mismatch!",
    };
  }

  try {
    await signIn("credentials", {
      email: parsedData.email,
      password: parsedData.password,
      redirect: false,
    });

    // Manage "Remember Me" cookies using the reusable function
    await manageRememberMeCookies(
      !!data.rememberMe,
      data.rememberMe ? data.email : undefined,
      data.rememberMe ? data.password : undefined,
    );

    return {
      success: true,
      message: "Login successful",
      role: user.role as Role,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message ?? "Something went wrong!",
    };
  }
}

/**
 * A reusable server action to manage "Remember Me" cookies.
 *
 * @param {boolean} rememberMe - Whether the user wants to be remembered.
 * @param {string | undefined} email - The email to store in the cookie (optional if deleting).
 * @param {string | undefined} password - The password to store in the cookie (optional if deleting).
 */
export async function manageRememberMeCookies(
  rememberMe: boolean,
  email?: string,
  password?: string,
) {
  const cookieOptions = {
    sameSite: "strict" as const, // Prevents the cookie from being sent with cross-site requests
    maxAge: 2592000, // Expires after 30 days (in seconds)
  };

  if (rememberMe && email && password) {
    // Set the "rememberMeEmail" and "rememberMePassword" cookies
    cookies().set({
      name: "rememberMeEmail",
      value: email,
      ...cookieOptions,
    });
    cookies().set({
      name: "rememberMePassword",
      value: password,
      ...cookieOptions,
    });
  } else {
    // Delete the "rememberMeEmail" and "rememberMePassword" cookies
    cookies().delete("rememberMeEmail");
    cookies().delete("rememberMePassword");
  }
}
