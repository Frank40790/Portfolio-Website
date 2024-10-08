import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Comfortaa, Inter } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={comfortaa.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
