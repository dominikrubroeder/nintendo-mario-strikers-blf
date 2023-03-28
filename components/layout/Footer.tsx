import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="z-0 px-4 py-8 text-center text-xs opacity-50">
      Nintendo © {new Date().getFullYear()}, Developed by Dominik Rubröder.
      University Project. All rights go to their respective owners.
    </footer>
  );
};

export default Footer;
