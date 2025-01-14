import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[950px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("./assets/escritorio.jpg")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white">
        <h1 className="text-9xl font-bold mb-4">Lex<span className="text-blue-700">Pro</span> Conect</h1>
        <p className="text-4xl mb-6">Conecte-se com a justiça. Encontre o advogado ideal.</p>
        {/* <a
          href="#"
          className="px-6 py-4 text-2xl bg-white text-black rounded shadow hover:bg-gray-300"
        >
          Venha ser LexPro
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
