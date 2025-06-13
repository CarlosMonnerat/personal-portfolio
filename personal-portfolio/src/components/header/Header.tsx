import Logo from "./logo";
import Medias from "./Medias";
import Nav from "./Nav";

export default function Header() {
   return (
      <div className="flex flex-row justify-around items-center bg-amber-400 h-20">
         <Logo/>
         <Nav/>
         <Medias/>
      </div>
   )
};