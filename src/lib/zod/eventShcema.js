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

// Create pictures array schema
export const createPicturesArraySchema = (
  minImages = MIN_IMAGE,
  maxImages = MAX_IMAGES,
  maxFileSize = MAX_FILE_SIZE,
  acceptedTypes = ACCEPTED_IMAGE_TYPES
) => {
  const singleImageSchema = createMultiImageSchema(maxFileSize, acceptedTypes);

  return z
    .array(singleImageSchema)
    .min(
      minImages,
      `At least ${minImages} image${minImages > 1 ? "s" : ""} required`
    )
    .max(maxImages, `Maximum ${maxImages} images allowed`);
};

export const createEventSchemaFromData = (dataArrays) => {
  const { categories, eventTypes, certificates, locations, contributeType } =
    dataArrays;

  // Calculate the minimum date (7 days from today)
  const getMinStartDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 7);
    // Reset time to start of day for accurate comparison
    minDate.setHours(0, 0, 0, 0);
    return minDate;
  };

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

      startDate: z.date({ required_error: "Start date is required" }).refine(
        (date) => {
          const minDate = getMinStartDate();
          return date >= minDate;
        },
        {
          message: "Start date must be at least 7 days from today",
        }
      ),

      endDate: z.date({ required_error: "End date is required" }),

      // Add pictures validation
      pictures: createPicturesArraySchema(MIN_IMAGE, MAX_IMAGES),
    })
    .refine((data) => data.endDate >= data.startDate, {
      message: "End date must be after start date",
      path: ["endDate"],
    })
    .refine(
      (data) => {
        // Additional validation: end date should be reasonable (not too far in future)
        const maxFutureDate = new Date();
        maxFutureDate.setFullYear(maxFutureDate.getFullYear() + 2); // 2 years from now
        return data.endDate <= maxFutureDate;
      },
      {
        message: "End date cannot be more than 2 years in the future",
        path: ["endDate"],
      }
    );
};

// Helper function to get minimum start date (for UI display)
export const getMinimumStartDate = () => {
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 8);
  return minDate;
};

// Helper function to format the minimum date for display
export const getMinimumStartDateString = () => {
  const minDate = getMinimumStartDate();
  return minDate.toLocaleDateString();
};

// Validation helper for pictures (can be used for real-time validation)
export const validatePicturesArray = (files) => {
  if (!files || !Array.isArray(files)) {
    return { isValid: false, errors: ["Pictures must be an array"] };
  }

  if (files.length < MIN_IMAGE) {
    return {
      isValid: false,
      errors: [
        `At least ${MIN_IMAGE} image${MIN_IMAGE > 1 ? "s" : ""} required`,
      ],
    };
  }

  if (files.length > MAX_IMAGES) {
    return {
      isValid: false,
      errors: [`Maximum ${MAX_IMAGES} images allowed`],
    };
  }

  const errors = [];

  files.forEach((file, index) => {
    if (!(file instanceof File)) {
      errors.push(`Item ${index + 1} is not a valid file`);
      return;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      errors.push(
        `File ${index + 1} (${file.name}) exceeds ${
          MAX_FILE_SIZE / (1024 * 1024)
        }MB limit`
      );
    }

    // Check file type
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      errors.push(
        `File ${index + 1} (${
          file.name
        }) format not supported. Only ${ACCEPTED_IMAGE_TYPES.map(
          (type) => type.split("/")[1]
        ).join(", ")} allowed`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
};
export const inviteFriendSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(100, "Email must be less than 100 characters")
    .email("Invalid email address"),
});
