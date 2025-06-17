// export default function BlackHole() {
//   return (
//     <div className="fixed top-[-270px] left-0 w-full h-[600px] overflow-hidden -z-1 pointer-events-none">
//       <video
//         className="w-full h-full object-cover opacity-30 mix-blend-soft-light"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/assets/videos/blackhole.mp4" type="video/mp4" />
//         Seu navegador não suporta o vídeo.
//       </video>
//     </div>
//   );
// }

export default function BlackHole() {
  return (
    <div className="absolute top-[-285px] left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
      <video
        className="w-full h-full object-cover opacity-30 mix-blend-soft-light"
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




