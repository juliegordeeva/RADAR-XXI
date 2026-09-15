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

const businessBaseSchema = z.object({
  name: z.string().trim().min(2).max(80),
  companyRole: z.string().trim().min(2).max(160),
  contact: contactField,
  city: z.string().trim().min(2).max(80),
  date: z.string().trim().max(80).optional(),
  comment: z.string().trim().max(2000).optional(),
  product: z.string().trim().min(1).max(80),
  consent: z.boolean().refine((value) => value === true),
  website: z.string().optional(),
});

export const businessFormSchema = businessBaseSchema.extend({
  childrenCount: z.string().trim().max(40).optional(),
  familiesCount: z.string().trim().max(40).optional(),
  ages: z.string().trim().max(80).optional(),
});

export const officeDaySchema = businessFormSchema;
export const familyHikesSchema = businessFormSchema;
export const businessGeneralSchema = businessFormSchema;

export type LeadInput = z.infer<typeof leadSchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type BusinessFormInput = z.infer<typeof businessFormSchema>;
export type OfficeDayInput = BusinessFormInput;
export type FamilyHikesInput = BusinessFormInput;
export type BusinessGeneralInput = BusinessFormInput;
