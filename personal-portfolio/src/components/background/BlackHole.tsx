export default function BlackHole() {
   return (
      <div>
         <video
            className="absolute top-[-335px] left-0 w-full h-full object-cover z-0 opacity-30 mix-blend-soft-light"
            autoPlay
            loop
            muted
            playsInline
         >
         <source src="/assets/videos/blackhole.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
         </video>
      </div>
   )
};