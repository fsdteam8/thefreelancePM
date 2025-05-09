"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { loginAction } from "@/action/authentication/login";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema, LoginFormValues } from "@/schemas/auth";
import Cookies from "js-cookie"; // Import js-cookie for cookie retrieval
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Retrieve cookies for email and "Remember Me"
const rememberedEmail = Cookies.get("rememberMeEmail");
const rememberMePassword = Cookies.get("rememberMePassword");
const isRemembered = !!rememberedEmail && !!rememberMePassword;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pending, startTransition] = useTransition();

  const router = useRouter();

  // Initialize the form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: rememberedEmail ?? "",
      password: rememberMePassword ?? "",
      rememberMe: isRemembered ?? false,
    },
  });

  // Handle form submission
  async function onSubmit(data: LoginFormValues) {
    startTransition(() => {
      loginAction(data).then((res) => {
        if (!res?.success) {
          toast.error(res?.message);
          return;
        }

        // handle success
        setIsLoading(true);
        if (res.role === "user") {
          router.push("/");
        } else if (res.role === "admin") {
          router.push("/dashboard");
        }
      });
    });
  }

  const loading = isLoading || pending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    type="email"
                    className="border-primary border-[1px]  min-h-[45px] "
                    disabled={loading}
                    startIcon={Mail}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Enter your Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    className=" pr-10 border-primary border-[1px]  min-h-[45px]"
                    startIcon={Lock}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Remember me and Forgot password */}
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={loading}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium text-gray-700"
                >
                  Remember me
                </label>
              </div>
            )}
          />
          <Link
            href="/reset-request"
            className="text-sm font-medium text-orange-500 hover:text-orange-600"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 min-h-[45px]"
          disabled={loading}
        >
          {pending
            ? "Signing In..."
            : isLoading
              ? "Just a second..."
              : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
