import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Brenno Ribeiro Cardoso da Silva - Dev Fullstack",
  description: "Portfólio pessoal de Brenno da Silva, desenvolvedor fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
