import Logo from "./logo";
import Medias from "./Medias";
import Nav from "./Nav";

export default function Header() {
   return (
      <div className="flex flex-row justify-around items-center h-25 pt-3 bg-zinc-800">
         <Logo/>
         <Nav/>
         <Medias/>
      </div>
   )
};