import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="font-bold">São Paulo</h2>
          <p>Rua Hungria, 1100</p>
          <p>01455-906</p>
          <p>São Paulo - SP</p>
          <p>+55 (11) 3247.8400</p>
        </div>
        <div>
          <h2 className="font-bold">Rio de Janeiro</h2>
          <p>Rua Humaitá, 275, 16º andar</p>
          <p>22261-005</p>
          <p>Rio de Janeiro - RJ</p>
          <p>+55 (21) 2506.1600</p>
        </div>
        <div>
          <h2 className="font-bold">Brasília</h2>
          <p>SAFS, Qd. 2 - Bloco B</p>
          <p>70070-600</p>
          <p>Brasília - DF</p>
          <p>+55 (61) 3312.9400</p>
        </div>
        <div>
          <h2 className="font-bold">Palo Alto</h2>
          <p>228 Hamilton Avenue</p>
          <p>3rd floor</p>
          <p>CA 94301 / USA</p>
          <p>+1 (650) 798.5222</p>
        </div>
        <div>
          <h2 className="font-bold">Tokyo</h2>
          <p>1-6-2 Marunouchi</p>
          <p>Chiyoda-ku, 21st floor</p>
          <p>Tokyo / Japan</p>
          <p>+81 (3) 3216.7191</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">Pinheiro Neto Advogados. Todos os direitos reservados.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="underline hover:text-gray-300">Política de Privacidade e LGPD</a>
          <a href="#" className="underline hover:text-gray-300">Termos de uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
