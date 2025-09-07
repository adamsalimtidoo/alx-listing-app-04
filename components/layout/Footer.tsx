// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
