"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  title: string;
  color: string;
  imgUrl: string;
};

const GridNews: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: "Ultima noticia", color: "bg-red-400", imgUrl: "fff" },
    { id: 2, title: "A LexPro Conect lidera o merdado de software para judicial", color: "bg-blue-400", imgUrl: "ergeg" },
    { id: 3, title: "Card 3", color: "bg-green-400", imgUrl: "dwjjhfjwh" },
    { id: 4, title: "Card 4", color: "bg-yellow-400", imgUrl: "jdhukjd" },
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
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`p-10 h-[60vh] w-full rounded-xl shadow-lg text-white font-bold flex items-center justify-center ${card.color}`}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold">{card.title}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridNews;