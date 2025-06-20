import FormComponent from "./formComponent";

export default function ContactSection() {
  return (
    <section className="flex flex-row justify-between items-center max-w-6xl mx-auto rounded-xl border-1 border-purple-600 shadow-[0_0_30px_8px_rgba(192,132,252,0.5)]">
      <video
            className="w-xl h-full opacity-20 object-cover mix-blend-soft-light"
            autoPlay
            loop
            muted
            playsInline
         >
            <source src="/assets/videos/about.mp4" type="video/mp4" />
               Seu navegador não suporta o vídeo.
         </video>
      <FormComponent/>
    </section>
  )
};
