import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/projects-nextjs" : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAKEUCHI Portfolio",
  description: "Web / UI Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          ["--asset-bg-grid" as any]: `${prefix}/bg-grid.png`,
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
