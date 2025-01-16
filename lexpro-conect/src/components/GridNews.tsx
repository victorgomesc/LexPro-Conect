"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  imgUrl: string;
};

const GridNews: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: "Ultima noticia", imgUrl: "/assets/capa.webp" },
    { id: 2, title: "A LexPro Conect lidera o merdado de software para judicial", imgUrl: "/assets/capa.webp" },
    { id: 3, title: "Card 3", imgUrl: "/assets/capa.webp" },
    { id: 4, title: "Card 4", imgUrl: "/assets/capa.webp" },
  ]);

  // Função para reordenar os cards periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newOrder = [...prevCards];
        const firstCard = newOrder.shift();
        if (firstCard) newOrder.push(firstCard);
        return newOrder;
      });
    }, 8000); // Reordena a cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-12 p-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`h-[60vh] w-full rounded-xl shadow-lg text-white font-bold flex flex-col items-center justify-start`}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <Image src={card.imgUrl} alt="" width={300} height={300} quality={100} className="object-cover w-full" />
            <h1 className="text-5xl font-bold text-black">{card.title}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridNews;