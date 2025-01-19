import Image from 'next/image';
import React from 'react';

const IntrductionCard = () => {
  return (
    <div className="w-screen h-full mt-32 md:mt-64 flex flex-col items-center justify-center text-black px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        {/* Imagem */}
        <Image 
          src="/assets/advogado2.jpg" 
          alt="advogado" 
          width={800} 
          height={800} 
          quality={100} 
          className="w-full md:w-1/2 object-cover rounded-lg"
        />

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            Está procurando um advogado?
          </h1>
          <p className="text-lg md:text-2xl mt-8 text-justify">
            A LexPro Conect é a solução perfeita para quem busca agilidade, confiança e excelência ao encontrar 
            advogados capacitados pela internet. Nossa plataforma conecta você diretamente aos melhores profissionais 
            jurídicos, prontos para atender às suas necessidades de maneira eficiente e personalizada.
          </p>
          <p className="text-lg md:text-2xl mt-6 text-justify">
            Com uma interface intuitiva e filtros avançados, você pode localizar advogados especializados em diferentes 
            áreas do direito, seja para questões trabalhistas, familiares, imobiliárias ou empresariais. A LexPro Conect 
            garante que você tenha acesso a profissionais qualificados, com avaliações reais e informações transparentes, 
            tudo em um só lugar.
          </p>
          <p className="text-lg md:text-2xl mt-6 text-justify">
            Confie na LexPro Conect para encontrar o advogado certo, no momento certo. Experimente agora e resolva suas 
            demandas jurídicas com quem entende do assunto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntrductionCard;