import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORU - Your Intelligent Meeting Companion",
  description: "ORU is your AI-powered wearable companion that attends your meetings, guides you in real-time, and transforms how you communicate. Experience the future of personal AI assistance.",
  keywords: ["AI assistant", "meeting companion", "live translation", "AI coach", "wearable AI", "smart earbuds", "productivity"],
  authors: [{ name: "ORU Team" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: "ORU - Your Intelligent Meeting Companion",
    description: "AI-powered wearable that attends your meetings, guides you in real-time, and transforms how you communicate.",
    type: "website",
    locale: "en_US",
    images: ['/icon.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORU - Your Intelligent Meeting Companion",
    description: "AI-powered wearable that attends your meetings and guides you in real-time.",
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
