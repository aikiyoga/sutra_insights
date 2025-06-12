import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sutra Insights",
  description: "Explore the wisdom of Yoga Sutras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;700&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" precedence="default" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="py-4 text-center">
              <p>© {new Date().getFullYear()} Sutra Insights</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
