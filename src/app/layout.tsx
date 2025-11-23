import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiv Shakti Mishra | Data Odyssey",
  description: "Interactive portfolio of Shiv Shakti Mishra – ETL DataStage Consultant & Data Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
