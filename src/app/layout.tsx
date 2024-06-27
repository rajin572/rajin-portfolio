import type { Metadata } from "next";
import { Aleo as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Din Islam Rajin",
  description: "Din Islam Rajin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
