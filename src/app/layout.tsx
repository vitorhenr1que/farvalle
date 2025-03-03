import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import {Poppins} from 'next/font/google'
import {Montserrat} from 'next/font/google'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Maintenance } from "./components/Maintenance";
import { FooterTwo } from "./components/FooterTwo";

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

const poppins = Poppins({
  weight: ['300','400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

const montserrat = Montserrat({
  weight: ['300','400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Farvalle",
  description: "Website Faculdade Regional do Valle",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const isProduction = process.env.NEXT_PUBLIC_VERSION === "production"
    return isProduction ? (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable}`}>
          <Header/>
          {children}
          {/* <Footer/> */}
          <FooterTwo/>
      </body>
    </html>
  ) : (
    <html lang="pt-BR">
    <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable}`}>
        {children}
    </body>
  </html>
  )
}
