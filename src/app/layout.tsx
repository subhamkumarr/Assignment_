import type { Metadata } from "next";
import { Inter as CustomInter } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const customInter = CustomInter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interface AI",
  description: "Interface AI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customInter.className}>{children}</body>
    </html>
  );
}
