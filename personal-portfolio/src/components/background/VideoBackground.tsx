// components/VideoBackground.tsx
import React from "react";

type VideoBackgroundProps = {
  videoSrc: string;
  overlayOpacity?: string;
  children?: React.ReactNode;
};

export default function VideoBackground({
  videoSrc,
  overlayOpacity = "bg-black/40",
  children,
}: VideoBackgroundProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay escuro */}
      <div className={`absolute top-0 left-0 w-full h-full ${overlayOpacity} z-5`} />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
