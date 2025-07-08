import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo_portfolio.svg";

export default function Logo() {
  return (
    <Link href="/" className="block logo-small w-full">
      <Image
        src={logo}
        alt="Imagem da logo provisória"
        className="w-full h-auto object-contain"
        priority
      />
    </Link>
  );
}
