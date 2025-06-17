import Logo from "./logo";
import Medias from "./Medias";
import Nav from "./Nav";

export default function Header() {
   return (
      <header className="flex flex-row justify-around items-center w-full h-30 pt-3 z-10">
         <Logo/>
         <Nav/>
         <Medias/>
      </header>
   )
};