import Link from "next/link";

export default function Medias() {
   return (
      <div className="flex flex-row gap-10">
         <Link href='#'>
            LinkedIN
         </Link>
         <Link href='#'>
            GitHub
         </Link>
      </div>
   )
};