import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/layouts/main-header";

export const metadata: Metadata = {
  title: "Hyrly",
  description: "Find your perfect job",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
