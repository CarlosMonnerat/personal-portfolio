import CurriculoSection from "./CurriculoSection";

export default function About() {
   return (
      <section className="flex flex-row justify-between items-start gap-10 p-4 w-full max-w-7xl mx-auto rounded-xl border-1 border-purple-600 shadow-[0_0_30px_8px_rgba(192,132,252,0.5)]">
         <video
            className="w-xl h-full opacity-20 object-cover mix-blend-soft-light"
            autoPlay
            loop
            muted
            playsInline
         >
            <source src="/assets/videos/earth.mp4" type="video/mp4" />
               Seu navegador não suporta o vídeo.
         </video>

         <div className="flex flex-col justify-start items-center gap-2 w-xl h-full">
            <h3 className="text-3xl font-extrabold uppercase p-4 mb-8 text-purple-600">Carlos Henrique Monnerat Quintanilha</h3>

            <div className="flex flex-col justify-start items-start w-full mb-8">
               <p>
                  Desenvolvedor Web, focado em soluções digitais personalizadas e forte entusiasmo por criar interfaces modernas, rápidas e responsivas, totalmente funcionais e centradas na experiência do usuário. Páginas institucionais, lojas virtuais (e-commerce), blogs e landing pages. Meu objetivo é transformar ideias em experiências online eficientes e que gerem resultados, seja para atrair clientes, vender produtos ou fortalecer a presença digital.
               </p>
            </div>
            
            <div className="flex flex-col justify-start items-start w-full mb-25">
               <h4 className="text-2xl font-semibold text-purple-500">Formação Acadêmica:</h4>
               <ol className="list-disc pl-5">
                  <li>Bacharel em Física - 2024</li>
                  <li>Bacharel em Eng. de Software - 2026</li>
               </ol>   
            </div>
            <CurriculoSection/>
         </div>

      </section>
   )
};