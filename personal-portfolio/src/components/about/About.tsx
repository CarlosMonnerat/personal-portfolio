import CurriculoSection from "./CurriculoSection";
import Image from "next/image";
import perfil from "../../../public/assets/img/homem.png"; // Substitua conforme necessário

export default function About() {
  return (
    <section className="flex flex-row justify-evenly items-start gap-10 p-4 w-full max-w-7xl mx-auto rounded-xl about-section">
      <div className="flex flex-col justify-evenly items-center gap-10">
        <div>
          <Image
            src={perfil}
            alt="Imagem de perfil provisória"
            width={310}
            className="border-5 border-purple-500 rounded-full opacity-75 mt-8 shadow-[0_0_10px_2px_rgba(152,132,152)] float"
          />
        </div>
        <video
          className="max-w-sm h-full opacity-20 object-cover mix-blend-soft-light about-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/earth.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </div>

      <div className="flex flex-col justify-start items-center gap-2 w-xl h-full">
        <h3 className="text-5xl font-extrabold uppercase p-4 mb-8 text-gradient typing-wrapper">
          Carlos Monnerat
        </h3>

        <div className="flex flex-col justify-start items-start w-full mb-8">
          <p>
            Desenvolvedor Web, focado em soluções digitais personalizadas e forte entusiasmo por criar interfaces modernas, rápidas e responsivas, totalmente funcionais e centradas na experiência do usuário. Páginas institucionais, lojas virtuais (e-commerce), blogs e landing pages. Meu objetivo é transformar ideias em experiências online eficientes e que gerem resultados, seja para atrair clientes, vender produtos ou fortalecer a presença digital.
          </p>
        </div>

        <div className="flex flex-col justify-start items-start w-full mb-18">
          <h4 className="text-2xl font-semibold text-purple-500">Formação Acadêmica:</h4>
          <ol className="list-disc pl-5">
            <li>Bacharel em Física - 2024</li>
            <li>Bacharel em Eng. de Software - 2026</li>
          </ol>
        </div>

        <CurriculoSection />
      </div>
    </section>
  );
}
