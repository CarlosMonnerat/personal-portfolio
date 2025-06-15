import Logo from "./logo";
import Medias from "./Medias";
import Nav from "./Nav";

export default function Header() {
   return (
      <header className="flex flex-row justify-around items-center h-25 pt-3">
         <Logo/>
         <Nav/>
         <Medias/>
      </header>
   )
};