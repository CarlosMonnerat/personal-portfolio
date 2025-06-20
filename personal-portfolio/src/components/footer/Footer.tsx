// components/Footer.tsx

import Logo from "../header/logo";
import Medias from "../header/Medias";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-around mt-16">
      <Logo/>
      <p className="text-white">
         © Portifólio criado para fins profissionais | Carlos Monnerat - {new Date().getFullYear()}
      </p>
      <Medias/>
    </footer>
  );
}
