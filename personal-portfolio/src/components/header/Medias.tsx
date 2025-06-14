import Link from "next/link";
import Image from "next/image";
import linkedin from "../../../public/assets/img/icon-linkedin.svg";
import github from "../../../public/assets/img/icon-github.svg";


export default function Medias() {
   return (
      <div className="flex flex-row gap-10">
         <Link href='#' target="_blank" className="bg-zinc-300 w-8 h-8 rounded-full">
            <Image 
               src ={ linkedin }
               alt="Logotipo do LinkedIn"
            />
         </Link>
         <Link href='https://github.com/CarlosMonnerat' target="_blank" className="bg-zinc-300 w-8 h-8 rounded-full">
            <Image
               src={ github }
               alt="logotipo do GitHub"
            />
         </Link>
      </div>
   )
};