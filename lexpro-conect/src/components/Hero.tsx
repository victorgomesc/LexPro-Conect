import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url("./assets/escritorio.jpg")` }}
    >
      {/* Overlay para o gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 text-white text-center md:text-left">
        {/* Título responsivo */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
          Lex<span className="text-blue-700">Pro</span> Conect
        </h1>
        
        {/* Subtítulo responsivo */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
          Conecte-se com a justiça. Encontre o advogado ideal.
        </p>
        
        {/* Botão (opcional) */}
        {/* <a
          href="#"
          className="px-6 py-4 text-base sm:text-lg md:text-xl bg-white text-black rounded shadow hover:bg-gray-300"
        >
          Venha ser LexPro
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
