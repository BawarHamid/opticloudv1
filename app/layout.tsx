import type { Metadata } from "next";
import { inter } from "./theme/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opticloud",
  description: "Optilogic cloud v1",
  icons: {
    icon: "/icons/logo-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
