import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kha Noob | Backend Developer Portfolio",
  description: "AI-Powered Management Systems & ERP Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden`}>
        {/* Hiệu ứng hạt bụi mờ ảo toàn trang */}
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {children}
      </body>
    </html>
  );
}