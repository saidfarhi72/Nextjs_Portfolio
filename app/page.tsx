import Image from "next/image";
import Navbar from "./_components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FlipWords } from "@/components/ui/lip-words";
import Timline from "./_components/Timline";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Educations",
      link: "/educations",
    },
    {
      name: "Experiences",
      link: "/experiences",
    },
  ];
  const words = ["Innovative", "Creative", "Robust", "Scalable", "Efficient"];

  return (
    <>
      <div className="text-4xl max-w-5xl px-8 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Crafting
        <FlipWords words={words} /> <br />
        Software Solutions
      </div>
      <Timline />

      
    </>
  );
}
