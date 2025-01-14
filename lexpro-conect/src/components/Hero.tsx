import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("./assets/escritorio.jpg")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white">
        <h1 className="text-4xl font-bold mb-4">LexPro Conect</h1>
        <p className="text-lg mb-6">Conecte-se com a justiça. Encontre o advogado ideal.</p>
        <a
          href="#"
          className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition"
        >
          BOtão
        </a>
      </div>
    </div>
  );
};

export default Hero;
