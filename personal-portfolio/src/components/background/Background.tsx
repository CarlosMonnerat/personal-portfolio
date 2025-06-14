import BackgroundVideo from "next-video/background-video";

export default function Background() {
   return (
      <div className="w-full h-full absolute -z-10">
         <video autoPlay loop muted playsInline>
            <source src="/assets/videos/galaxy.mp4" type="video/mp4" />
               Seu navegador não suporta a tag de vídeo.
         </video>
      </div>
   )
};