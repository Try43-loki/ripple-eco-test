import { z } from "zod";

export const activitySchema = z.object({
  time: z
    .string()
    .min(1, "Time is required")
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  task: z
    .string()
    .min(1, "Task is required")
    .min(3, "Task must be at least 3 characters")
    .transform((str) => str.trim()),
});
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const daySchema = z.object({
  activities: z
    .array(activitySchema)
    .min(1, "At least one activity is required")
    .superRefine((activities, ctx) => {
      // Validate time chronological order
      for (let i = 1; i < activities.length; i++) {
        const prevTime = activities[i - 1].time;
        const currentTime = activities[i].time;

        if (prevTime && currentTime) {
          const prevMinutes = timeToMinutes(prevTime);
          const currentMinutes = timeToMinutes(currentTime);

          if (currentMinutes <= prevMinutes) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Activity ${
                i + 1
              } time must be later than activity ${i} time`,
              path: [i, "time"],
            });
          }
        }
      }
    }),
});

export const agendaSchema = z.object({
  days: z.array(daySchema).min(1, "At least one day is required"),
});
