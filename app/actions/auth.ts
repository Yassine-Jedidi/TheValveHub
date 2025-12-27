"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { auth } from "@/lib/auth"; // Server-side auth
import prisma from "@/lib/prisma";
import { clientSignUpSchema } from "@/lib/validations/auth";

export async function signUpClient(formData: z.infer<typeof clientSignUpSchema>) {
    try {
        // 1. Validate Input
        const validatedFields = clientSignUpSchema.parse(formData);

        // 2. Check if user already exists (Better Auth might do this, but good to check early)
        const existingUser = await prisma.user.findUnique({
            where: { email: validatedFields.email }
        });

        if (existingUser) {
            return { error: "User with this email already exists" };
        }

        // 3. Create Company (Assumption: Every new signup creates a company record for Admin review)
        // In a real production app, we might search for existing companies to join, but for now we create one.
        const company = await prisma.company.create({
            data: {
                id: crypto.randomUUID(),
                name: validatedFields.companyName,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });

        // 4. Create User via Better Auth API
        // Since 'role', 'companyId' and 'status' are input:false, we cannot pass them directly in signUpEmail if typed strictly.
        // We create the user first with basic info.
        await auth.api.signUpEmail({
            body: {
                email: validatedFields.email,
                password: validatedFields.password,
                name: validatedFields.name,
            },
            headers: await headers() 
        });

        // 5. Update User with Role and Company
        await prisma.user.update({
            where: { email: validatedFields.email },
            data: {
                role: "CLIENT",
                companyId: company.id,
                status: "PENDING"
            }
        });

        return { success: true };

    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: error.issues[0].message };
        }
        if (error instanceof Error) {
            return { error: error.message }; 
        }
        return { error: "An unexpected error occurred" };
    }
}
