'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ícones de hambúrguer e fechar

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Menu desktop */}
      <div className="hidden md:flex border-2 border-purple-400 rounded-full px-6 py-3">
        <ul className="flex flex-row gap-10 font-bold text-white">
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
      </div>

      {/* Botão menu hambúrguer - mobile */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-14 right-0 w-48 bg-purple-900 rounded-lg shadow-lg p-4 z-50 md:hidden">
          <ul className="flex flex-col gap-4 text-white font-bold">
            <li>
              <Link
                href="#"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

