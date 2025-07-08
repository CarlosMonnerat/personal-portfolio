'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center border-2 border-purple-400 rounded-full px-6 py-3 shadow-[0_0_12px_3px_rgba(192,132,252,0.5)]">
      
      {/* Menu horizontal (desktop) */}
      <ul className="flex-row gap-20 font-bold text-white hidden is-desktop">
        <li>
          <Link href="#" className="hover:text-purple-400">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-purple-400">
            Habilidades
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-purple-400">
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-purple-400">
            Contato
          </Link>
        </li>
      </ul>

      {/* Botão do menu hambúrguer (mobile) */}
      <div className="text-white is-mobile cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu vertical (mobile) */}
      {menuOpen && (
        <div className="absolute top-14 right-0 w-56 border-2 border-purple-700 rounded-lg p-4 z-50 is-mobile shadow-[0_0_12px_3px_rgba(192,132,252,0.5)]">
          <ul className="flex flex-col gap-4 text-white font-bold">
            <li>
              <Link href="#" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
                Habilidades
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

