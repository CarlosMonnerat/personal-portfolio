import BlackHole from "@/components/background/BlackHole";
import VideoBackground from "@/components/background/VideoBackground";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div>
      <VideoBackground videoSrc="/assets/videos/galaxy.mp4">
        <BlackHole/>
        <div className="w-full absolute top-0 left-0 z-20">
          <Header />
        </div>
        <main className="w-full">
            <Hero/>
        </main>
        
        
      </VideoBackground>
       
    </div>
  );
}
