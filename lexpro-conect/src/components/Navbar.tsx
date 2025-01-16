import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-link-contain">
      <Link href="/pages/profeshional">
        <p className="nav-link">Profissionais</p>
      </Link>

      <Link href="/pages/signup">
        <p className="nav-link">Assine já</p>
      </Link>

      <Link href="#">
        <p className="nav-link">Contato</p>
      </Link>

      <Link href="#">
        <p className="nav-link">Duvidas</p>
      </Link>

    </div>
  )
}

export default Navbar
