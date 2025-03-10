import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueDot Impact Connect | AI Safety Community & Mentorship",
  description: "BlueDot Impact Connect is a community and mentorship platform for AI safety enthusiasts. Join us to connect with like-minded individuals, share knowledge, and make a positive impact in the field of AI safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
