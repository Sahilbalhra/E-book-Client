import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConditionalLayout from "@/wrapper/ConditionalLayoutWrapper";
import AuthWrapper from "@/wrapper/AuthWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebook Store",
  description: "Get Any Book at Affordable Price",
  icons: [{ rel: "icon", url: "/book.png" }],
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

