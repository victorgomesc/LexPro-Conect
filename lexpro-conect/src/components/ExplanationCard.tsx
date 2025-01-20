import Image from "next/image";
import React from "react";

const Book: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-wrap items-center justify-center gap-8 px-4 py-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white w-full md:w-1/3 lg:w-1/4 h-auto p-6 rounded-3xl shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-600 text-center mb-4">
              Pessoas atendidas em 2024
            </h2>
            <Image
              src="/assets/selo.avif"
              alt="selo"
              width={400}
              height={400}
              quality={100}
              className="w-full h-auto max-w-xs mx-auto"
            />
            <div className="mt-4">
              <p className="flex items-center justify-center text-center">
                <span className="text-6xl font-extrabold tracking-tight text-black">
                  2340
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:text-black hover:border-black transition-colors duration-200 text-sm"
              href="#"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center bg-white w-full md:w-1/3 lg:w-1/4 h-auto p-6 rounded-3xl shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-600 text-center mb-4">
              Profissionais Ativos
            </h2>
            <Image
              src="/assets/selo.avif"
              alt="selo"
              width={400}
              height={400}
              quality={100}
              className="w-full h-auto max-w-xs mx-auto"
            />
            <div className="mt-4">
              <p className="flex items-center justify-center text-center">
                <span className="text-6xl font-extrabold tracking-tight text-black">
                  2340
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:text-black hover:border-black transition-colors duration-200 text-sm"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white w-full md:w-1/3 lg:w-1/4 h-auto p-6 rounded-3xl shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-600 text-center mb-4">
              Profissionais Ativos
            </h2>
            <Image
              src="/assets/selo.avif"
              alt="selo"
              width={400}
              height={400}
              quality={100}
              className="w-full h-auto max-w-xs mx-auto"
            />
            <div className="mt-4">
              <p className="flex items-center justify-center text-center">
                <span className="text-6xl font-extrabold tracking-tight text-black">
                  2340
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:text-black hover:border-black transition-colors duration-200 text-sm"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
