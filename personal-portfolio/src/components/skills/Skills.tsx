import Image from "next/image";

interface Skill {
  name: string;
  src: string;
  width: number;
}

const skills: Skill[] = [
  { name: "HTML5", src: "/assets/img/technologies/html5.svg", width: 80 },
  { name: "CSS3", src: "/assets/img/technologies/css3.svg", width: 80 },
  { name: "JavaScript", src: "/assets/img/technologies/javascript.svg", width: 67 },
  { name: "TypeScript", src: "/assets/img/technologies/typescript.svg", width: 67 },
  { name: "React", src: "/assets/img/technologies/react.svg", width: 75 },
  { name: "Next.js", src: "/assets/img/technologies/nextjs.svg", width: 80 },
  { name: "TailwindCSS", src: "/assets/img/technologies/tailwind.svg", width: 80 },
  { name: "Node.js", src: "/assets/img/technologies/nodejs.svg", width: 100 },
  { name: "MySQL", src: "/assets/img/technologies/mysql.svg", width: 118 },
  { name: "Git", src: "/assets/img/technologies/git.svg", width: 90 },
  { name: "GitHub", src: "/assets/img/technologies/github.svg", width: 75 },
];

export default function Skills() {
  return (
    <div className="flex flex-row justify-around items-center flex-wrap gap-10 p-4 w-full max-w-3xl mx-auto rounded-xl bg-transparent">
      {skills.map((skill, index) => (
        <div key={index} className="relative group">
          <Image
            src={skill.src}
            alt={`Logo ${skill.name}`}
            width={skill.width}
            height={skill.width}
            className="transition-transform duration-300 ease-in-out cursor-pointer"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-black/70 px-2 py-1 rounded">
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );
}
