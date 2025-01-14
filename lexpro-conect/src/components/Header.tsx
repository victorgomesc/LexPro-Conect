import React from "react";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <header className="fixed top-0 w-full flex items-center justify-between bg-transparent px-4 py-2 z-50">

        <div className="flex gap-6 mt-8 justify-center items-center w-screen mx-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-10/12 h-16 text-xl px-4 py-2 rounded-full border border-gray-500 
            text-white placeholder-gray-300 bg-transparent focus:outline-none focus:ring-2 
            focus:ring-blue-500"
          />

        <div className="text-white text-2xl cursor-pointer hover:text-gray-300">
        <FaSearch size={28} />
        </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
