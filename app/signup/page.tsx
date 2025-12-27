"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientSignUpForm } from "@/components/auth/client-signup-form"
import { PartnerSignUpForm } from "@/components/auth/partner-signup-form"

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
                                <ClientSignUpForm />
                            </TabsContent>

                            <TabsContent value="partner" className="mt-0 space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                                <PartnerSignUpForm />
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
