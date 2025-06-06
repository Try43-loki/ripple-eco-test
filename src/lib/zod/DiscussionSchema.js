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
    .max(3, "You can add up to 3 tags only"),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(200, { message: "Description must be less than 200 characters" }),
  image: z.instanceof(File, { message: "Image must be a file" }).optional(),
});

// export const tagDiscussionSchema = z.object({
//   // tag: z
//   //   .string()
//   //   .min(1, { message: "Tags is required" })
//   //   .max(15, { message: "Tags must be less than 15 characters" })
//   //   .regex(/^#/, { message: "Tag must start with #" }),
//   tag: z
//     .array(
//       z
//         .string()
//         .min(2, "Tag too short")
//         .max(15, "Tag too long")
//         .refine((val) => val.startsWith("#"), "Tag must start with #")
//     )
//     .min(1, "At least one tag is required"),
// });
