import { z } from "zod";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MIN_IMAGE = 1;
const MAX_IMAGES = 15;
export const createMultiImageSchema = (
  maxFileSize = MAX_FILE_SIZE,
  acceptedTypes = ACCEPTED_IMAGE_TYPES
) => {
  const customSingleImageSchema = z
    .any()
    .refine((file) => file instanceof File, "Must be a valid file")
    .refine(
      (file) => file?.size <= maxFileSize,
      `Max image size is ${maxFileSize / (1024 * 1024)}MB.`
    )
    .refine(
      (file) => acceptedTypes.includes(file?.type),
      `Only ${acceptedTypes
        .map((type) => type.split("/")[1])
        .join(", ")} formats are supported.`
    );
  return customSingleImageSchema;
};

export const createEventSchemaFromData = (dataArrays) => {
  const {
    categories,
    eventTypes,
    certificates,
    locations,
    contributeType,
    pictures,
  } = dataArrays;

  return z
    .object({
      title: z.string().min(1, "Title is required"),
      description: z.string().min(1, "Description is required"),
      volunteer: z
        .string()
        .min(1, "Number of volunteers is required")
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
          message: "Must be a valid positive number",
        }),

      categories: z.enum(
        categories.map((cat) => cat.value),
        { errorMap: () => ({ message: "Please select a valid category" }) }
      ),

      eventTypes: z.enum(
        eventTypes.map((type) => type.value),
        { errorMap: () => ({ message: "Please select a valid event type" }) }
      ),

      certificate: z.enum(
        certificates.map((cert) => cert.value),
        { errorMap: () => ({ message: "Please select certificate option" }) }
      ),

      location: z.enum(
        locations.map((loc) => loc.value),
        { errorMap: () => ({ message: "Please select a valid location" }) }
      ),

      contributeType: z.enum(
        contributeType.map((type) => type.value),
        { errorMap: () => ({ message: "Please select contribution type" }) }
      ),

      startDate: z.date({ required_error: "Start date is required" }),
      endDate: z.date({ required_error: "End date is required" }),
    })
    .refine((data) => data.endDate >= data.startDate, {
      message: "End date must be after start date",
      path: ["endDate"],
    });
};

export const inviteFriendSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(100, "Email must be less than 100 characters")
    .email("Invalid email address"),
});
