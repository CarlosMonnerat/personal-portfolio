import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo_portfolio.svg"

export default function Logo() {
   return (
      <Link href='/'>
         <Image
            src={ logo }
            alt="Imagem da logo provisória"
            width={150}
         />
      </Link>
   )
};