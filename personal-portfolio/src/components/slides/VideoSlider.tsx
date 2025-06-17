'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const videoList = [
  {
    file: 'project1.mp4',
    siteUrl: 'https://meusite.com/project1',
    githubUrl: 'https://github.com/usuario/project1',
  },
  {
    file: 'project2.mp4',
    siteUrl: 'https://meusite.com/project2',
    githubUrl: 'https://github.com/usuario/project2',
  },
  {
    file: 'project3.mp4',
    siteUrl: 'https://meusite.com/project3',
    githubUrl: 'https://github.com/usuario/project3',
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg group">
      {/* Container do carrossel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videoList.map((video, index) => (
          <div
            key={index}
            className="relative w-full h-[480px] flex-shrink-0 cursor-pointer"
          >
            <video
              className="w-full h-full object-cover"
              src={`/assets/videos/${video.file}`}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />

            {/* Ações sobre o vídeo */}
            <div className="absolute bottom-4 left-4 flex gap-4 bg-black/50 p-2 rounded-lg">
              <a
                href={video.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-purple-400 transition"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Visitar Site</span>
              </a>
              <a
                href={video.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-purple-400 transition"
              >
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2 z-10">
        {videoList.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

