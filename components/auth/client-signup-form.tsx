"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Building2, Mail, Lock, User } from "lucide-react"

import { signUpClient } from "@/app/actions/auth"
import { clientSignUpSchema } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export function ClientSignUpForm() {
    const [loading, startTransition] = useTransition()
    const [serverError, setServerError] = useState("")
    const [success, setSuccess] = useState(false)

    const form = useForm<z.infer<typeof clientSignUpSchema>>({
        resolver: zodResolver(clientSignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            password: "",
        },
    })

    const handleSubmit = (values: z.infer<typeof clientSignUpSchema>) => {
        setServerError("")
        setSuccess(false)

        startTransition(async () => {
            const result = await signUpClient(values)

            if (result.error) {
                setServerError(result.error)
            } else {
                setSuccess(true)
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                {serverError && (
                    <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                        {serverError}
                    </div>
                )}
                {success && (
                    <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                        Account created! Please wait for approval.
                    </div>
                )}

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Full Name</FormLabel>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Abdullah Ahmed"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Work Email</FormLabel>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <FormControl>
                                    <Input
                                        placeholder="name@company.com.sa"
                                        type="email"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Company Name</FormLabel>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <FormControl>
                                    <Input
                                        placeholder="Your Organization"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Password</FormLabel>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 h-11 bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm transition-all"
                >
                    {loading ? "Creating Account..." : "Create Client Account"}
                </Button>
            </form>
        </Form>
    )
}
