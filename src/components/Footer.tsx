import React from "react";

const Footer = () => {
  return (
    <footer className="border-t p-5 text-center absolute bottom-0 w-screen">
      <p>© {new Date().getFullYear()} E-Books All rights reserved.</p>
    </footer>
  );
};

export default Footer;
