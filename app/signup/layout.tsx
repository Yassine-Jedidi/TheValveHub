import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign Up | TheValveHub",
    description: "Create an account on Saudi Arabia's premier industrial RFQ platform for valves.",
}

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
