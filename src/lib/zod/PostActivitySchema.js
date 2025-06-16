import { z } from "zod";

export const postActivitySchema = z.object({
  activity: z
    .array(
      z.object({
        title: z.string().optional(),
        image: z
          .any()
          .refine((val) => val instanceof File || val === undefined, {
            message: "Image must be a file",
          })
          .optional(),
        description: z
          .string()
          .min(1, { message: "Description is required" })
          .max(200, {
            message: "Description must be less than 200 characters",
          }),
      })
    )
    .min(1, { message: "At least one activity is required" })
    .refine((val) => val[0]?.title && val[0].title.trim() !== "", {
      message: "Title is required for the first activity",
      path: ["activity", 0, "title"],
    }),
});
