import Link from "next/link";

export default function Nav() {
   return (
      <nav>
         <ul className="flex flex-row gap-10 font-bold text-white m-2">
            <Link href='#' className="hover:text-cyan-300">
               <li>Sobre Mim</li>
            </Link>
            <Link href='#'>
               <li>Habilidades</li>
            </Link>
            <Link href='#'>
               <li>Projetos</li>
            </Link>   
         </ul>
      </nav>
   )
};