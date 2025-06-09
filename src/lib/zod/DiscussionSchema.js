import { z } from "zod";

export const discussionSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  tag: z
    .array(
      z
        .string()
        .startsWith("#", "Each tag must start with #")
        .max(15, "Max 15 chars per tag")
    )
    .min(1, "At least one tag is required")
    .max(3, "You can add up to 3 tags only")
    .refine((tags) => new Set(tags).size === tags.length, {
      message: "Tags must be unique",
    }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(200, { message: "Description must be less than 200 characters" }),
  image: z.instanceof(File, { message: "Image must be a file" }).optional(),
});
