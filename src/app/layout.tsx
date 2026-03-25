import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORU - Your AI-Powered Life Assistant",
  description: "ORU is your intelligent companion for productivity, communication, and personal growth. Experience the future of AI assistance.",
  keywords: ["AI assistant", "productivity", "voice AI", "personal assistant", "smart calendar", "email management"],
  authors: [{ name: "ORU Team" }],
  openGraph: {
    title: "ORU - Your AI-Powered Life Assistant",
    description: "Experience the future of AI assistance with ORU",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORU - Your AI-Powered Life Assistant",
    description: "Experience the future of AI assistance with ORU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
