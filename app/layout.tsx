import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/widgets/Header/Header";

export const metadata: Metadata = {
  title: "Inventory For 사장님",
  description: "재고관리 POS 플랫폼",
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${pretendard.variable} font-pretendard flex flex-col min-h-screen bg-background-alternative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
