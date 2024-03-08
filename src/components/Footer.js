import React from "react";

const Footer = () => {
  return (
    <footer className="p-3 flex justify-center items-center gap-1 sm:flex-row bg-white border-t-2 border-slate-200">
      <span>&copy; 2024 -</span>
      <span>
        Made with ❤{" "}
        <a href="https://hoanguyen.dev" target="_blank">
          Hoa Nguyen
        </a>
      </span>
    </footer>
  );
};

export default Footer;
