"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ConditionalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  return (
    <>
      {pathName.includes("sign") ? (
        <> {children}</>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default ConditionalLayout;
