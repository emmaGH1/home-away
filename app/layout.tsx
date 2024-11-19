import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${inter} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
