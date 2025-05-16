"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { TemplateCreateType } from "@/schemas/templates";
import { TemplateType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTemplate(data: TemplateCreateType) {
  const cu = await auth();

  // Check if user is authenticated and is an admin
  if (!cu || cu.user.role !== "admin") {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    // Create the template
    const newTemplate = await prisma.template.create({
      data: {
        title: data.title,
        description: data.description,

        category: data.category as TemplateType,
        price: Number(data.price) ?? undefined, // optional
        file: data.file, // assumes this is a file path or URL
        plan: data.plan, // assuming plan ID is provided
        published: data.publishNow ?? false,
        banner: data.banner,
      },
    });

    // Optional: Revalidate relevant paths (e.g., templates list page)
    revalidatePath("/dashboard/conten");

    return {
      success: true,
      message: "Template created successfully",
      data: newTemplate,
    };
  } catch (error) {
    console.error("Failed to create template:", error);
    return {
      success: false,
      message: "An error occurred while creating the template",
    };
  }
}
