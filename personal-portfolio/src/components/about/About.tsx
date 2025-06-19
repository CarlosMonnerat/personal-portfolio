export default function About() {
   return (
      <section className="flex flex-row justify-between items-center gap-10 p-4 w-full max-w-6xl mx-auto rounded-xl border-2 border-purple-600">
         <video
            className="w-xl h-full opacity-20 object-cover mix-blend-soft-light border-2 border-amber-500"
            autoPlay
            loop
            muted
            playsInline
         >
            <source src="/assets/videos/about.mp4" type="video/mp4" />
               Seu navegador não suporta o vídeo.
         </video>
   
         
         <div>Informações</div>

      </section>
   )
};