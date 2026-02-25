import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import BgEffect from "@/components/BgEffect";
import Footer from "@/components/footer";
import FooterNav from "@/components/footerNav";
// import FluidCursor from "@/components/FluidCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const uberMove = localFont({
  src: "../../public/fonts/UberMoveBold.otf",
  variable: "--font-uber-move",
  weight: "700",
});

export const metadata: Metadata = {
  title: "The Redact Media",
  description: "A platform for media editing and collaboration.",
  icons: {
    icon: '/images/WebsiteCornerLogo.png',
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
        className={`${geistSans.variable} ${geistMono.variable} ${uberMove.variable} antialiased bg-black text-white min-h-screen`}>
        <SmoothScroll />
        <BgEffect />
        {/* <FluidCursor /> */}
        <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md">
          {" "}
          <Navbar />
        </div>
        {children}
        <Footer />
        <FooterNav />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3HJ0CQZV81"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3HJ0CQZV81');
          `}
        </Script>
      </body>
    </html>
  );
}
