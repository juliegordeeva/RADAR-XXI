import { z } from "zod";

const contactField = z
  .string()
  .trim()
  .min(3, "contact")
  .refine((value) => {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const phone = /^\+?[0-9\s()-]{7,20}$/.test(value);
    return email || phone;
  }, "contact");

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: contactField,
  product: z.string().trim().max(80).optional(),
  childAge: z.string().trim().max(20).optional(),
  consent: z.boolean().refine((value) => value === true),
  website: z.string().optional(),
});

export const subscribeSchema = z.object({
  email: z.string().trim().email(),
  consent: z.boolean().refine((value) => value === true),
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
