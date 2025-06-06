import { z } from "zod";

export const createEventSchemaFromData = (dataArrays) => {
  const { categories, eventTypes, certificates, locations, contributeType } =
    dataArrays;

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

      eventType: z.enum(
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
      picture: z.any().optional(),
    })
    .refine((data) => data.endDate >= data.startDate, {
      message: "End date must be after start date",
      path: ["endDate"],
    });
};
