import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { LenisProvider } from "@/src/shared/ui/lenis-provider";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio built with Next.js, Bun, Tailwind CSS, and Biome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.variable}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
