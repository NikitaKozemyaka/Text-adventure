import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import { Orbit } from "lucide-react";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const appName = "Space Text World";

export const metadata: Metadata = {
  title: "STW · Полевой архив · Рейс-01",
  description:
    "Полевой архив Space Text World: пробуждение после крушения «Рейс-01» на Астре.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("dark font-sans", exo.variable)}>
      <body className="antialiased min-h-screen bg-[#070b16] text-slate-100 flex flex-col">
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b border-cyan-400/15 bg-[#070b16]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-14 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
                <Orbit className="h-4 w-4" />
              </div>
              {appName}
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-cyan-400/15">
          <div className="container mx-auto px-4 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {appName}
          </div>
        </footer>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
