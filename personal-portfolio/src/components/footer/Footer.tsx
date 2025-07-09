// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo_portfolio.svg";
import Medias from "../header/Medias";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-around mt-16 bg-amber-400">
      <Link href="/" className="block logo-small w-full is-desktop">
        <Image
          src={logo}
          alt="Imagem da logo"
          className="w-full h-auto object-contain"
          priority
        />
      </Link>
      <p className="text-white p-10">
         © Portifólio criado para fins profissionais | Carlos Monnerat - {new Date().getFullYear()}
      </p>
      <Medias/>
    </footer>
  );
}
