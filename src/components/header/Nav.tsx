'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para rolar até a seção correspondente
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Fecha o menu mobile se estiver aberto
    }
  };

  return (
    <nav className="relative flex justify-between items-center border-2 border-purple-400 rounded-full px-6 py-3 shadow-[0_0_12px_3px_rgba(192,132,252,0.5)]">

      {/* Menu horizontal (desktop) */}
      <ul className="flex-row gap-15 font-bold text-white hidden is-desktop">
        <li>
          <button onClick={() => scrollToSection("projetos")} className="hover-glow-purple cursor-pointer">
            PROJETOS
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("habilidades")} className="hover-glow-purple cursor-pointer">
            HABILIDADES
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("sobre")} className="hover-glow-purple cursor-pointer">
            SOBRE
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contato")} className="hover-glow-purple cursor-pointer">
            CONTATO
          </button>
        </li>
      </ul>

      {/* Botão do menu hambúrguer (mobile) */}
      <div className="text-white is-mobile cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu vertical (mobile) */}
      {menuOpen && (
        <div className="absolute top-14 right-0 w-56 bg-purple-500 border-2 border-purple-700 rounded-lg p-4 z-50 is-mobile shadow-[0_0_12px_3px_rgba(192,132,252,0.5)]">
          <ul className="flex flex-col gap-4 text-white font-bold">
            <li>
              <button onClick={() => scrollToSection("projetos")} className="hover:text-purple-400">
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("habilidades")} className="hover:text-purple-400">
                Habilidades
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("sobre")} className="hover:text-purple-400">
                Sobre Mim
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contato")} className="hover:text-purple-400">
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

