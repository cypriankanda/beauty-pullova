import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(2, "Select a service"),
});

export type ClientFormData = z.infer<typeof clientSchema>;