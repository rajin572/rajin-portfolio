import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAJIN",
  description: "Din Islam Rajin Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          (montserrat.className,
          "min-h-screen bg-background text-foreground antialiased")
        }
      >
        {children}
      </body>
    </html>
  );
}
