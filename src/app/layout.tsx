import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Darabasz | Software Developer",
  description:
    "Junior software developer building modern, responsive web experiences with React, TypeScript, and Tailwind CSS.",
  metadataBase: new URL("https://mattdarabasz.dev"),
  openGraph: {
    title: "Matthew Darabasz | Software Developer",
    description:
      "Modern web portfolio featuring projects, experience, and skills across software development and IT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </div>
          <div className="relative z-10">
            <ScrollToTop />
            <Navbar />
            <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-20 sm:px-10 sm:pt-24 lg:px-12">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
