import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: 'Develop.me – Portfolio ',
  description: 'Showcasing my skills and projects in web development',
  keywords: ['portfolio', 'next.js', 'developer'],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`font-sporting `}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
