import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Auburn University AI Education",
  description: "Auburn University AI Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable}`,
          'font-sans antialiased',
          'bg-white text-gray-900',
          'selection:bg-blue-600/10 selection:text-blue-600',
          'min-h-screen'
        )}
      >
        {children}
      </body>
    </html>
  );
}
