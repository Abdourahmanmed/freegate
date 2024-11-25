import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center text-sm sm:text-base">
          &copy; {new Date().getFullYear()} AZIMH (Abdourahman,Zakaria,Mohamed,Ilyas,Habon). Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
