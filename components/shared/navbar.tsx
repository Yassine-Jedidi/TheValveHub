import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="w-full border-b bg-background py-4">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/TheValveHub.svg"
                        alt="The Valve Hub"
                        width={180}
                        height={50}
                        priority
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Right Actions Section */}
                <div className="flex items-center gap-4">
                    <Button variant="default" asChild>
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                    <Button variant="accent" asChild>
                        <Link href="/submit-rfq">
                            Submit RFQ
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
