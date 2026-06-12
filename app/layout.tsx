import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cellar Notes",
  description: "A personal wine memory journal for bottles, notes, ratings, and stories."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
