import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LoadingBar } from "@/components/layout/loading-bar";
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
  title: {
    default: "MarketLearn — Digital Marketing from Zero to Pro",
    template: "%s | MarketLearn",
  },
  description:
    "Learn digital marketing from fundamentals to campaigns: SEO, content, social media, email, paid ads, analytics, and portfolio projects. Quizzes and hands-on practice for beginners.",
  keywords: ["digital marketing", "SEO", "social media marketing", "Google Ads", "content marketing", "email marketing", "analytics", "GA4"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
