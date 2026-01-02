import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NearHelp - Real-Time Hyperlocal Help at Your Fingertips",
  description: "Connect with verified helpers nearby. Get help instantly, pay in cash. Available now for Android.",
  keywords: "help, local services, nearby help, real-time assistance, India",
  openGraph: {
    title: "NearHelp - Real-Time Hyperlocal Help",
    description: "Connect with verified helpers nearby. Get help instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
