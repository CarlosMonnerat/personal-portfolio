import Link from "next/link";

export default function Nav() {
   return (
      <nav>
         <ul className="flex flex-row gap-10">
            <Link href='#'>
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