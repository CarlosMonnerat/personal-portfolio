import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/hero-img.svg"

export default function HeroImg() {
   return (
         <Image
         className="flex justify-center items-center w-130"
            src={ logo }
            alt="Imagem da hero do portifólio"
            width={150}
         />   
   )
};