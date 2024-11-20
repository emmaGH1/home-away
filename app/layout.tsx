import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import {ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Feel at home, away from home.",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster />
      <ClerkProvider>
          <html lang="en">
            <body
              className={`${inter} antialiased`}
            suppressHydrationWarning>
              <Providers>
                <Navbar />
                <main className="container py-10">
                  {children}
                </main>
              </Providers>
            </body>
          </html>
        </ClerkProvider>
      </>
  );
}
