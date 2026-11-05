import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axeom Intelligence | Operations & Triage Hub",
  description: "Operational command center for Axeom Content Studio - Dallas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
