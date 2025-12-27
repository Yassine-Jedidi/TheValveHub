"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Building2, Mail, Lock, User, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { signUpClient } from "@/app/actions/auth"
import { clientSignUpSchema } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUpPage() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("client")
    const [loading, startTransition] = useTransition()
    const [serverError, setServerError] = useState("")
    const [success, setSuccess] = useState(false)

    // React Hook Form for Client
    const form = useForm<z.infer<typeof clientSignUpSchema>>({
        resolver: zodResolver(clientSignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            password: "",
        },
    })

    const handleClientSubmit = (values: z.infer<typeof clientSignUpSchema>) => {
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
        <div className="relative min-h-screen flex items-center justify-center px-4 py-4">
            <div className="relative z-10 w-full max-w-md">
                <div className="mb-8 flex flex-col items-center">
                    <div className="mt-8 text-center">
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Create your account</h1>
                        <p className="text-slate-500 mt-2">Join the premier industrial valve marketplace</p>
                    </div>
                </div>

                <Card className="border-border shadow-lg overflow-hidden relative">
                    <div className={`absolute top-0 inset-x-0 h-1 transition-colors duration-300 ${activeTab === 'client' ? 'bg-primary' : 'bg-accent'}`} />
                    <Tabs defaultValue="client" onValueChange={setActiveTab} className="w-full">
                        <CardHeader className="pb-4">
                            <TabsList className="grid w-full grid-cols-2 h-11 p-1 bg-slate-100/80">
                                <TabsTrigger
                                    value="client"
                                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-medium transition-all"
                                >
                                    Client
                                </TabsTrigger>
                                <TabsTrigger
                                    value="partner"
                                    className="data-[state=active]:bg-white data-[state=active]:text-accent data-[state=active]:shadow-sm font-medium transition-all"
                                >
                                    Partner
                                </TabsTrigger>
                            </TabsList>
                            <div className="mt-6">
                                <CardTitle className="text-xl font-bold text-slate-900">Registration Details</CardTitle>
                                <CardDescription className="mt-1.5">
                                    Provide your professional information to join the hub.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <TabsContent value="client" className="mt-0 space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(handleClientSubmit)} className="space-y-4">
                                        {/* Server Error/Success Messages */}
                                        {serverError && (
                                            <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                                                {serverError}
                                            </div>
                                        )}
                                        {success && (
                                            <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                                                Account created! Check your email or wait for admin approval.
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
                            </TabsContent>

                            <TabsContent value="partner" className="mt-0 space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                                <div className="space-y-2">
                                    <Label htmlFor="partner-name" className="text-sm font-medium text-slate-700">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="partner-name"
                                            placeholder="e.g. Khalid Mohammed"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="partner-email" className="text-sm font-medium text-slate-700">Work Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="partner-email"
                                            type="email"
                                            placeholder="partnership@vendor.com"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="partner-company" className="text-sm font-medium text-slate-700">Vendor Entity Name</Label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="partner-company"
                                            placeholder="Official Business Name"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="partner-service" className="text-sm font-medium text-slate-700">Service Coverage</Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="partner-service"
                                            placeholder="Riyadh, Dammam, etc."
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="partner-password" className="text-sm font-medium text-slate-700">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="partner-password"
                                            type="password"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>
                                <Button className="w-full mt-2 h-11 bg-accent hover:bg-accent/90 text-white font-semibold shadow-sm transition-all">
                                    Create Partner Account
                                </Button>
                            </TabsContent>
                        </CardContent>
                    </Tabs>
                </Card>

                <div className="mt-10 flex items-center justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    <Image
                        src="/Saudi_Vision_2030_logo.svg"
                        alt="Vision 2030"
                        width={48}
                        height={32}
                        className="grayscale"
                    />
                    <div className="h-4 w-px bg-slate-300" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Industrial Growth KSA
                    </span>
                </div>
            </div>
        </div>
    )
}
