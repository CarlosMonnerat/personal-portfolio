import VideoBackground from "@/components/background/VideoBackground";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div>
      <VideoBackground videoSrc="/assets/videos/galaxy.mp4">
        <div className="w-full absolute top-0 left-0 z-20">
          <Header />
        </div>
        <h1>Título numero 1 da página: Teste!!!!</h1>
      </VideoBackground>
       
    </div>
  );
}
