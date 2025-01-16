import Image from 'next/image'
import React from 'react'

const IntrductionCard = () => {
  return (
    <div className="w-screen h-full mt-64 items-center flex justify-center text-black">
      <div className="w-4/5 flex gap-24">
      <Image src="/assets/advogado2.jpg" alt='advogado' width={650} height={650} quality={100} className='' />
      <div>
        <h1 className="text-6xl font-bold">Está procurando um advogado?</h1>
        <p className="text-4xl mt-12 text-justify">A LexPro Conect é a solução perfeita para quem busca agilidade, confiança e excelência ao encontrar 
          advogados capacitados pela internet. Nossa plataforma conecta você diretamente aos melhores profissionais 
          jurídicos, prontos para atender às suas necessidades de maneira eficiente e personalizada.
        </p><br></br>
        <p className="text-4xl text-justify mt-2">
        Com uma interface intuitiva e filtros avançados, você pode localizar advogados especializados em diferentes 
        áreas do direito, seja para questões trabalhistas, familiares, imobiliárias ou empresariais. A LexPro Conect 
        garante que você tenha acesso a profissionais qualificados, com avaliações reais e informações transparentes, 
        tudo em um só lugar.
        </p><br></br>
        <p className="text-4xl text-justify mt-2">
        Confie na LexPro Conect para encontrar o advogado certo, no momento certo. Experimente agora e resolva suas 
        demandas jurídicas com quem entende do assunto!
        </p>
      </div>
      
      </div>
    </div>
  )
}

export default IntrductionCard
