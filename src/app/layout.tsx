import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/wrapper/ConditionalLayoutWrapper";
import AuthWrapper from "@/wrapper/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebook Store",
  description: "Get Any Book at Affordable Price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthWrapper>
        <body className={inter.className}>
          <ConditionalLayout>{children}</ConditionalLayout>
        </body>
      </AuthWrapper>
    </html>
  );
}

