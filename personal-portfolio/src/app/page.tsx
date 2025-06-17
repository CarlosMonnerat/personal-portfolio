import VideoBackground from "@/components/background/VideoBackground";
import Header from "@/components/header/Header";
import BlackHole from "@/components/background/BlackHole";

export default function Home() {
  return (
    <>
      {/* Vídeo de fundo fixo */}
      <VideoBackground videoSrc="/assets/videos/galaxy.mp4" />
      
      {/* Conteúdo por cima do vídeo */}
      <BlackHole />
      <Header/>

      {/* <Header />
      <main className="relative z-10 text-white px-8 py-20 space-y-20">
        <h1 className="text-4xl font-bold">Bem-vindo ao Universo</h1>
        <BlackHole />
        <section className="h-[1500px] bg-white/10 rounded-lg p-8">
          <p>Conteúdo longo que gera rolagem...</p>
        </section>
      </main> */}
    </>
  );
}

