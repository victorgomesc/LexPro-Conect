import Image from "next/image";
import React from "react";

const Book: React.FC = () => {
  return (
<div className="w-screen h-screen flex items-center gap-14 justify-center">
<div className="flex flex-col items-center justify-center bg-white w-3/12 h-4/6 rounded-3xl">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          className="text-4xl font-bold tracking-tighter text-gray-600 lg:text-4xl text-center"
        >
          Pessoas atendidas em 2024
        </h2>
      </div>
      <Image src="/assets/selo.avif" alt="selo" width={400} height={400} quality={100} className="" />
      <div className="mt-6">
        <p className="flex items-center justify-center text-center">
          <span className="text-9xl flex gap-6 font-extrabold tracking-tight text-black">
            2340
          </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      className="flex items-baseline justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Saiba mais
    </a>
  </div>
</div> 

<div className="flex flex-col bg-white w-3/12 h-4/6  items-center justify-center rounded-3xl">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          className="text-xl font-bold tracking-tighter text-gray-600 text-center lg:text-4xl"
        >
          Prossionais Ativos
        </h2>
        <Image src="/assets/selo.avif" alt="selo" width={400} height={400} quality={100} className="" />
      </div>
      <div className="mt-6">
        <p className="text-center">
          <span className="text-9xl text-center font-bold tracking-tight text-black">
            2340
          </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      className="flex items-baseline justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div> 

<div className="flex flex-col bg-white w-3/12 h-4/6 rounded-3xl">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
          Starter
        </h2>
        <p className="mt-2 text-sm text-gray-500">Suitable to grow steadily.</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="text-9xl font-bold tracking-tight text-black">
            $25
          </span>
          <span className="text-base font-medium text-gray-500"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      className="flex items-baseline justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div> 
</div>
  );
};

export default Book;
