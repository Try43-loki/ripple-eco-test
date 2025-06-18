// In your @/lib/zod/eventSchema.ts file (or create a new file if needed)
import { z } from "zod";

export const volunteerRequestSchema = z.object({
  answer: z
    .string()
    .refine(
      (value) => value.trim().length > 0,
      "Answer cannot be just whitespace"
    )
    .describe("Your reason for volunteering"),
});
