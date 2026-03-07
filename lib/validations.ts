import { z } from "zod";

export const step1Schema = z.object({
    packageType: z.enum(["tandem", "course"], {
        message: "packageRequired",
    }),
    location: z.enum(["gantolle", "ciater"], {
        message: "locationRequired",
    }),
    date: z.string().min(1, "dateRequired"),
    pax: z.number().min(1, "paxRequired").max(4),
});

export const step2Schema = z.object({
    fullName: z.string().min(2, "nameMin"),
    email: z.string().email("emailInvalid"),
    phone: z.string().min(10, "phoneMin"),
    age: z.number().min(10, "ageMin"),
    weight: z.number().max(90, "weightMax").min(1, "weightRequired"),
    emergencyName: z.string().min(1, "emergencyNameRequired"),
    emergencyPhone: z.string().min(1, "emergencyPhoneRequired"),
    medicalConditions: z.string().optional(),
});

export const step3Schema = z.object({
    insurance: z.boolean().optional(),
    termsAccepted: z.literal(true, {
        message: "termsRequired",
    }),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;

export type BookingData = Step1Data & Step2Data & Step3Data;
