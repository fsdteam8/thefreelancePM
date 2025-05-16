import { z } from "zod";

// Define the form schema with Zod
export const teamplateCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  file: z.string().min(1, { message: "File is required" }),
  plan: z.string().min(1, { message: "Plan is required" }),
  banner: z.string().min(5, { message: "Banner is required" }),
  publishNow: z.boolean().default(false).optional(),
});

export type TemplateCreateType = z.infer<typeof teamplateCreateSchema>;
