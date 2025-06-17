export default function BlackHole() {
  return (
    <div className="fixed top-[-45%] left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl -z-1 pointer-events-none">
      <video
        className="w-full h-auto object-cover opacity-50 mix-blend-soft-light"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/blackhole.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
    </div>
  );
}

