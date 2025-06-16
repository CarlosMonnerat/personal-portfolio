import Link from "next/link";

export default function Nav() {
   return (
      <nav className= "border-2 border-purple-400 px-6 py-1 rounded-full">
         <ul className="flex flex-row gap-20 font-bold text-white m-2">
            <Link href='#' className="hover:text-purple-400">
               <li>Sobre Mim</li>
            </Link>
            <Link href='#'>
               <li>Habilidades</li>
            </Link>
            <Link href='#'>
               <li>Projetos</li>
            </Link>
            <Link href='#'>
               <li>Contato</li>
            </Link>     
         </ul>
      </nav>
   )
};