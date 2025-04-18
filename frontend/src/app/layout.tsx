import "./styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "./components/QueryProvider";

export const metadata: Metadata = {
  title: "Project Handler",
  description: "Generated by create next app",
};

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
