import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";
import BgEffect from "@/components/BgEffect";
import FluidCursor from "@/components/FluidCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Redact Media",
  description: "A platform for media editing and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}>
        <BgEffect />
        {/* <FluidCursor /> */}
        <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md">
          {" "}
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
