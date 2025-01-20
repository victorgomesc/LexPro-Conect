"use client";

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
    { id: 1, title: "Ultima noticia", imgUrl: "/assets/imagebg.avif" },
    { id: 2, title: "A LexPro Conect lidera o mercado de software judicial", imgUrl: "/assets/capa3.webp" },
    { id: 3, title: "Card 3", imgUrl: "/assets/capa3.webp" },
    { id: 4, title: "Card 4", imgUrl: "/assets/capa3.webp" },
  ]);

  // Reordenar os cards periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newOrder = [...prevCards];
        const firstCard = newOrder.shift();
        if (firstCard) newOrder.push(firstCard);
        return newOrder;
      });
    }, 4000); // Reordena a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-bold mb-10">Notícias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6 p-4 md:p-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="h-[40vh] md:h-[50vh] w-full bg-black rounded-xl shadow-lg text-white font-bold flex flex-col items-center justify-start overflow-hidden"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <div className="h-3/4 w-full">
              <Image
                src={card.imgUrl}
                alt=""
                width={300}
                height={200}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white p-4 text-center">
              {card.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridNews;
