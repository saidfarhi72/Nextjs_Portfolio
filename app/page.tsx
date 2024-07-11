import Image from "next/image";
import Navbar from "./_components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";

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
      link: "/Educations",
    },{
      name: "Experiences",
      link: "/xperiences",
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 justify-between p-24">
      <FloatingNav navItems={navItems} />

    </main>
  );
}
