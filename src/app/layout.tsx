import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syauqi-Akmal-Fadhali/Portfolio",
  description:
    "Portfolio profesional Syauqi Akmal Fadhali - Fullstack Developer berpengalaman membangun aplikasi web fungsional, interaktif, dan terukur.",
  keywords: [
    "Syauqi Akmal Fadhali",
    "Fullstack Developer",
    "Web Developer Indonesia",
    "Laravel",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Syauqi Akmal Fadhali" }],
  openGraph: {
    title: "Syauqi Akmal Fadhali | Fullstack Developer",
    description:
      "Membangun aplikasi web yang fungsional, interaktif, dan berpusat pada pengalaman pengguna.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#000000] font-sans selection:bg-[#000000] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
