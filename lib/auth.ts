import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "CLIENT",
                input: false 
            },
            status: {
                type: "string",
                required: false,
                defaultValue: "PENDING",
                input: false
            },
            companyId: {
                type: "string",
                required: false,
                input: false
            },
            serviceAreas: {
                type: "string",
                required: false,
                input: true // Partners might update this during onboarding
            }
        }
    }
});
