interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: string;
}

export default function VideoBackground({ videoSrc, overlayOpacity = "bg-black/50" }: VideoBackgroundProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className={`absolute top-0 left-0 w-full h-full ${overlayOpacity}`} />
    </div>
  );
}

