import FormComponent from "./formComponent";

export default function ContactSection() {
  return (
    <section className="flex flex-row justify-evenly items-start max-w-7xl mx-auto rounded-xl contact-section">
      <video
        className="w-xl h-auto opacity-20 object-cover mix-blend-soft-light contact-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/about.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <FormComponent />
    </section>
  );
}
