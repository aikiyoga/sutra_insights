import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import ThemeAwareImage from "@/components/ThemeAwareImage";

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
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

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
              <div style={{ overflowWrap: 'break-word' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingBottom: '10px' }}>
                  <span style={{ fontFamily: 'Verdana', fontWeight: 'bold' }}>
                    Aiki Yoga
                  </span>
                  <a href="https://www.aiki-yoga.net/" style={{ textDecoration: 'none' }} title="Aiki Yoga Website">
                    <ThemeAwareImage 
                      lightSrc="https://www.aiki-yoga.net/assets/img/lotus-flower.png"
                      darkSrc="https://www.aiki-yoga.net/assets/img/lotus-flower-light.png"
                      width={50}
                      style={{ opacity: 0.3 }}
                      alt="Aiki Yoga"
                    />
                  </a>
                  <a href="https://www.instagram.com/aikimatsu.yoga" style={{ textDecoration: 'none' }} title="Aiki Yoga Instagram">
                    <ThemeAwareImage 
                      lightSrc="https://www.aiki-yoga.net/assets/img/instagram.png"
                      darkSrc="https://www.aiki-yoga.net/assets/img/instagram-light.png"
                      width={30}
                      style={{ opacity: 0.3 }}
                      alt="Instagram"
                    />
                  </a>
                  <a href="https://aikiyoga.substack.com" style={{ textDecoration: 'none' }} title="Aiki Yoga Substack">
                    <ThemeAwareImage 
                      lightSrc="https://www.aiki-yoga.net/assets/img/substack.png"
                      darkSrc="https://www.aiki-yoga.net/assets/img/substack-light.png"
                      width={30}
                      style={{ opacity: 0.3 }}
                      alt="Substack"
                    />
                  </a>
                  <a href="https://x.com/aiki_yoga" style={{ textDecoration: 'none' }} title="Aiki Yoga Twitter/X">
                    <ThemeAwareImage 
                      lightSrc="https://www.aiki-yoga.net/assets/img/twitter-x.png"
                      darkSrc="https://www.aiki-yoga.net/assets/img/twitter-x-light.png"
                      width={30}
                      style={{ opacity: 0.3 }}
                      alt="Twitter/X"
                    />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
