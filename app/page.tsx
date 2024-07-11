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
    <main className="flex min-h-screen flex-col items-center bg-gray-50 justify-between p-24">
      <FloatingNav navItems={navItems} />
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Crafting
        <FlipWords words={words} /> <br />
        Software Solutions
      </div>
      <Timline />

      
    </main>
  );
}
