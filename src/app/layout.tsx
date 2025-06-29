import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body
        className={`font-sporting  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
