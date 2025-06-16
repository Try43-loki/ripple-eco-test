import z from "zod";
const verifyOrganizerSchema = z.object({
  nationalID: z
    .string()
    .min(10, "ID card is required")
    .max(10, "ID card invalid"),
  khmerName: z.string().min(1, "Khmer name is required"),
  engName: z.string().min(1, "ENG name is required"),
  dayOfBirth: z
    .string()
    .min(1, "Day of birth is required")
    .max(2, "Day of birth is invalid"),
  monthOfBirth: z
    .string()
    .min(1, "Month of birth is required")
    .max(2, "Month of birth is invalid"),
  yearOfBirth: z.string().min(4, "Year of birth is required"),
});

export { verifyOrganizerSchema };
