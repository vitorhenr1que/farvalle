import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Farvalle",
  description: "Website Faculdade Regional do Valle",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        
      </body>
    </html>
  );
}
