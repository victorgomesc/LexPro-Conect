import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav-link-contain bg-black text-white fixed top-[64px] w-full z-40">
      <div className="flex justify-center gap-8 py-4">
        <Link href="/pages/profeshional">
          <p className="nav-link hover:text-gray-300 cursor-pointer">Profissionais</p>
        </Link>

        <Link href="/pages/signup">
          <p className="nav-link hover:text-gray-300 cursor-pointer">Assine já</p>
        </Link>

        <Link href="#">
          <p className="nav-link hover:text-gray-300 cursor-pointer">Contato</p>
        </Link>

        <Link href="#">
          <p className="nav-link hover:text-gray-300 cursor-pointer">Dúvidas</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;