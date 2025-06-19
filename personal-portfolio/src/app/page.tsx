import VideoBackground from "@/components/background/VideoBackground";
import Header from "@/components/header/Header";
import BlackHole from "@/components/background/BlackHole";
import Hero from "@/components/hero/Hero";
import VideoSlider from "@/components/slides/VideoSlider";
import { videoList } from "@/components/projects/VideoList";
import { videoList2 } from "@/components/projects/VideoList2";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";


export default function Home() {
  return (
    <div>
      {/* Vídeo de fundo fixo */}
      <VideoBackground videoSrc="/assets/videos/galaxy.mp4" />
      
      {/* Conteúdo por cima do vídeo */}
      <BlackHole />
      <Header/>
      <main className="relative z-10 text-white px-8 py-20 space-y-20">
        <Hero/>
        <h2 className="flex justify-center items-center mt-60 text-white text-3xl font-bold">
            Meus Projetos
        </h2>
        <p className="w-full max-w-6xl mx-auto">Consumo de APIs e Games!!!!</p>
        <VideoSlider videos={videoList}/>
        <p className="w-full max-w-6xl mx-auto">Landing Pages com HTMl, CSS e JavaScript puro!!!!</p>
        <VideoSlider videos={videoList2}/>
        <h2 className="flex justify-center items-center mt-60 text-white text-3xl font-bold">
            Habilidades
        </h2>
        <Skills/>
        <h2 className="flex justify-center items-center mt-60 text-white text-3xl font-bold">
            Sobre Mim
        </h2>
        <About/>
        <h2 className="flex justify-center items-center mt-60 text-white text-3xl font-bold">
            Contato
        </h2>
      </main> 
    </div>
  );
}

