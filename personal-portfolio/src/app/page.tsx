import VideoBackground from "@/components/background/VideoBackground";
import Header from "@/components/header/Header";
import BlackHole from "@/components/background/BlackHole";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      {/* Vídeo de fundo fixo */}
      <VideoBackground videoSrc="/assets/videos/galaxy.mp4" />
      
      {/* Conteúdo por cima do vídeo */}
      <BlackHole />
      <Header/>
      <main className="relative z-10 text-white px-8 py-20 space-y-20">
        <Hero/>
        
      </main> 
    </>
  );
}

