import Description from "./description"
import HeroImg from "./HeroImg"
import Title from "./Titulo"
import Welcome from "./Welcome"

export default function Hero() {
   return (
      <section className="flex flex-row flex-1 justify-around items-center w-full z-20 bg-transparent">
         <div className="flex flex-col gap-3">
            <Welcome/>
            <Title/>
            <Description/>
         </div>
         <div>
            <HeroImg/>
         </div>
      </section>
   )      
};