import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walid Ahsan — Full Stack Developer (MERN, Next.js, Django)",
  description:
    "Walid Ahsan is a full stack developer with 3+ years of experience building scalable web and SaaS platforms with the MERN stack, Next.js and Django.",
  openGraph: {
    title: "Walid Ahsan — Full Stack Developer",
    description: "Scalable web and SaaS platforms built with the MERN stack, Next.js and Django.",
    images: ["/images/walid-ahsan-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
