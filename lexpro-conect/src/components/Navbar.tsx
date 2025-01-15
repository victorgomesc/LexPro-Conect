import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed text-white mt-32 gap-16 font-bold text-2xl top-0 w-full flex items-center bg-transparent justify-center px-4 py-2 z-50">
      <Link href="/pages/profeshional">
        <p className="hover:text-blue-300">Profissionais</p>
      </Link>

      <Link href="/pages/signup">
        <p className="hover:text-blue-300">Assine já</p>
      </Link>

      <Link href="#">
        <p className="hover:text-blue-300">Contato</p>
      </Link>

      <Link href="#">
        <p className="hover:text-blue-300">Duvidas</p>
      </Link>

    </div>
  )
}

export default Navbar
