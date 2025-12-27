"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, Mail, Lock, User, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
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
    const [activeTab, setActiveTab] = useState("client")

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
                                <div className="space-y-2">
                                    <Label htmlFor="client-name" className="text-sm font-medium text-slate-700">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="client-name"
                                            placeholder="e.g. Abdullah Ahmed"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="client-email" className="text-sm font-medium text-slate-700">Work Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="client-email"
                                            type="email"
                                            placeholder="name@company.com.sa"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="client-company" className="text-sm font-medium text-slate-700">Company Name</Label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="client-company"
                                            placeholder="Your Organization"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="client-password" className="text-sm font-medium text-slate-700">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="client-password"
                                            type="password"
                                            className="ps-10 h-11 border-slate-200 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>
                                <Button className="w-full mt-2 h-11 bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm transition-all">
                                    Create Client Account
                                </Button>
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
