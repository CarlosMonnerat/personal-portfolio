import Image from "next/image";
import logo from "../../../public/assets/img/hero-img.svg";

export default function HeroImg() {
  return (
    <div className="flex justify-center items-center w-full hide-hero-on-mobile">
      <Image
        className="w-110 float"
        src={logo}
        alt="Imagem da hero do portfólio"
      />
    </div>
  );
}
