import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GaushalaNavbar from '@/app/(components)/GaushalaNavbar';
import GaushalaFooter from '@/app/(components)/GaushalaFooter';
import DonateCarousel from '@/app/(components)/DonateCarousel';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiv Mandir Gaushala",
  description: "Dedicated to the care, protection, and service of cows. Join us in our journey of compassion, tradition, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GaushalaNavbar />
        {children}
        <GaushalaFooter />
      </body>
    </html>
  );
}
