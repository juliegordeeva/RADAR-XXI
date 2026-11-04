import { availableInternships, isReferralSource } from "@/content/internships";
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
  format: z.string().trim().max(40).optional(),
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

const universityContact = z
  .string()
  .trim()
  .min(3)
  .max(80)
  .refine((value) => {
    const digits = value.replace(/\D/g, "");
    return (
      /^@?[A-Za-z][A-Za-z0-9_]{4,31}$/.test(value) ||
      (/^\+?[0-9\s()-]{7,24}$/.test(value) &&
        digits.length >= 7 &&
        digits.length <= 15)
    );
  }, "contact");
export const universitySchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    contact: universityContact,
    age: z.string().pipe(z.enum(["4-6", "7-9", "10-12", "13-16"])),
    program: z.string().min(1),
    source: z.string().max(32),
    company: z.string().trim().max(80),
    sector: z.enum(["", "think", "create", "agree", "finish"]),
    consent: z.boolean().refine((value) => value === true),
    website: z.string().max(0).optional(),
  })
  .superRefine((values, ctx) => {
    const program = availableInternships.find(
      (item) => item.slug === values.program,
    );
    if (!program || !program.ageGroups.includes(values.age))
      ctx.addIssue({ code: "custom", path: ["program"], message: "program" });
    if (values.source && !isReferralSource(values.source))
      ctx.addIssue({ code: "custom", path: ["source"], message: "source" });
  });
export type UniversityInput = z.infer<typeof universitySchema>;

export type UniversityFields = z.input<typeof universitySchema>;
