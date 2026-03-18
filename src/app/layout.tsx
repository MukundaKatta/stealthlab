import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "StealthLab — AI Research Lab Management", description: "Paper tracker, compute allocation, researcher profiles, experiment dashboard" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className="bg-gray-950 text-gray-100 antialiased">{children}</body></html>;
}
