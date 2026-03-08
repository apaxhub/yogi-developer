import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Global Persistent Components
import Navbar from "@/components/home/Navbar";
import FloatingActions from "@/components/home/FloatingActions";
import Footer from "@/components/home/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Yogi Developers - Building Excellence in Ahmedabad",
  description: "Premier general contracting and property development in Gujarat. Specializing in residential, commercial, and industrial construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans selection:bg-primary selection:text-bg bg-bg min-h-screen relative`}
      >
        <Navbar />
        <FloatingActions />

        {children}

        <Footer />
      </body>
    </html>
  );
}
