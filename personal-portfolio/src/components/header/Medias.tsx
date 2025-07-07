import Link from "next/link";
import Image from "next/image";
import linkedin from "../../../public/assets/img/icon-linkedin.svg";
import github from "../../../public/assets/img/icon-github.svg";

export default function Medias() {
  return (
    <div className="hidden md:flex flex-row gap-6">
      <Link
        href="#"
        target="_blank"
        className="bg-zinc-300 w-8 h-8 rounded-full flex items-center justify-center hover:border-3 border-purple-400 transition"
      >
        <Image
          src={linkedin}
          alt="Logotipo do LinkedIn"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="https://github.com/CarlosMonnerat"
        target="_blank"
        className="bg-zinc-300 w-8 h-8 rounded-full flex items-center justify-center hover:border-3 border-purple-400 transition"
      >
        <Image
          src={github}
          alt="Logotipo do GitHub"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}
