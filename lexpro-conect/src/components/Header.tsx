import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 w-full flex items-center justify-between bg-transparent px-4 py-2 z-50">
        <div className="flex gap-4 mt-4 justify-center items-center w-full mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12">
          {/* Campo de busca */}
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl px-4 py-2 
            rounded-full border border-gray-500 text-white placeholder-gray-300 
            bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Ícone de busca */}
          <div className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gray-300">
            <FaSearch size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;