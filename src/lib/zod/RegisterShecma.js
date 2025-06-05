import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
});

// export const infoSchema = z.object({
//   firstName: z.string().min(1, { message: "First name is required" }),
//   lastName: z.string().min(1, { message: "Last name is required" }),
//   phone: z.string().min(1, { message: "Phone is required" }),
//   address: z.string().min(1, { message: "Address is required" }),
//   gender: z.enum(["male", "female"], {
//     errorMap: () => ({ message: "Gender is required" }),
//   }),
//   dateOfBirth: z
//     .string()
//     .min(1, { message: "Date of birth is required" })
//     .refine(
//       (dateStr) => {
//         const dob = new Date(dateStr);
//         const ageDiff = Date.now() - dob.getTime();
//         const age = ageDiff / (1000 * 60 * 60 * 24 * 365.25);
//         return !isNaN(dob.getTime()) && age >= 13;
//       },
//       { message: "You must be at least 13 years old" }
//     ),
// });

export const infoSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    birthDate: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Gender is required"),
    address: z.string().min(1, "Address is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    // Make organizerName optional but validate it when provided
    organizerName: z.string().optional(),
  })
  .refine(
    (data) => {
      // This refinement will be handled in the component logic
      // We don't validate organizerName here since we handle it conditionally
      return true;
    },
    {
      message: "Invalid data",
    }
  );

// Alternative approach: Create a more sophisticated schema that validates based on role
export const infoSchemaWithConditional = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    birthDate: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Gender is required"),
    address: z.string().min(1, "Address is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    organizerName: z.string().optional(),
    isOrganizer: z.boolean().optional(),
  })
  .refine(
    (data) => {
      // If isOrganizer is true, organizerName should be required
      if (
        data.isOrganizer &&
        (!data.organizerName || data.organizerName.trim().length === 0)
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Organizer name is required for organizers",
      path: ["organizerName"], // This will show the error on the organizerName field
    }
  );

// For even more control, you can create dynamic schemas
export const createInfoSchema = (isOrganizer) => {
  return z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    birthDate: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Gender is required"),
    address: z.string().min(1, "Address is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    organizerName: isOrganizer
      ? z.string().min(1, "Organizer name is required")
      : z.string().optional(),
  });
};
