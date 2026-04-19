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
  metadataBase: new URL("https://cilantro-labs.com"),
  title: {
    default: "Cilantro Labs — AI agents for restaurants",
    template: "%s · Cilantro Labs",
  },
  description:
    "Cilantro Labs builds AI agents that run the operational work behind every great restaurant — so owners can focus on the food and the floor.",
  keywords: [
    "AI agents",
    "restaurant AI",
    "restaurant automation",
    "Cilantro Labs",
    "hospitality AI",
  ],
  authors: [{ name: "Cilantro Labs" }],
  creator: "Cilantro Labs",
  openGraph: {
    type: "website",
    url: "https://cilantro-labs.com",
    siteName: "Cilantro Labs",
    title: "Cilantro Labs — AI agents for restaurants",
    description:
      "AI agents that run the operational work behind every great restaurant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cilantro Labs — AI agents for restaurants",
    description:
      "AI agents that run the operational work behind every great restaurant.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
