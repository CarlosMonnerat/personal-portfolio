import Link from "next/link";

export default function Nav() {
  return (
   <nav className="border-2 border-purple-400 rounded-full px-6 py-3">

      <ul className="flex flex-row gap-20 font-bold text-white">
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
   </nav>
  );
}
