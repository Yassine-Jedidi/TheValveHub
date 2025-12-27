"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Building2, Mail, Lock, User, MapPin } from "lucide-react"

import { signUpPartner } from "@/app/actions/auth"
import { partnerSignUpSchema } from "@/lib/validations/auth"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { KSA_STATES } from "@/lib/constants/locations"

export function PartnerSignUpForm() {
    const [loading, startTransition] = useTransition()
    const [serverError, setServerError] = useState("")
    const [success, setSuccess] = useState(false)

    const form = useForm<z.infer<typeof partnerSignUpSchema>>({
        resolver: zodResolver(partnerSignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            serviceState: "",
            password: "",
        },
    })

    const handleSubmit = (values: z.infer<typeof partnerSignUpSchema>) => {
        setServerError("")
        setSuccess(false)

        startTransition(async () => {
            const result = await signUpPartner(values)

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
                        Partner account created! Please wait for approval.
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
                                        placeholder="e.g. Khalid Mohammed"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
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
                                        placeholder="partnership@vendor.com"
                                        type="email"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
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
                            <FormLabel className="text-sm font-medium text-slate-700">Vendor Entity Name</FormLabel>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <FormControl>
                                    <Input
                                        placeholder="Official Business Name"
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
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
                    name="serviceState"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Primary State / Province</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                                        <SelectTrigger className="ps-10 h-11 border-slate-200 focus:ring-accent w-full bg-white">
                                            <SelectValue placeholder="Select your primary state" />
                                        </SelectTrigger>
                                    </div>
                                </FormControl>
                                <SelectContent position="popper" sideOffset={4} className="max-h-60 w-[var(--radix-select-trigger-width)]">
                                    {KSA_STATES.map((state) => (
                                        <SelectItem key={state} value={state}>
                                            {state}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
                                        className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
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
                    className="w-full mt-2 h-11 bg-accent hover:bg-accent/90 text-white font-semibold shadow-sm transition-all"
                >
                    {loading ? "Creating Account..." : "Create Partner Account"}
                </Button>
            </form>
        </Form>
    )
}
