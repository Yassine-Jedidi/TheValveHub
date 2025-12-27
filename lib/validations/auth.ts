
import { z } from "zod";

export const clientSignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const partnerSignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  serviceState: z.string().min(2, "Please select at least one service state"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type ClientSignUpValues = z.infer<typeof clientSignUpSchema>;
export type PartnerSignUpValues = z.infer<typeof partnerSignUpSchema>;
