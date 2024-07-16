import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BriefcaseBusiness, GlobeLock, House, SquareLibrary } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Said FARHI",
  description: "Portfolio of Said FARHI",
  icons: "/public/profile.jpg",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon:<House />
    },
    {
      name: "Projects",
      link: "/projects",
      icon:<GlobeLock />
    },
   
    {
      name: "Experiences",
      link: "/experiences",
      icon:<BriefcaseBusiness />

    },
    {
      name: "Blogs",
      link: "/blogs",
      icon:<SquareLibrary />

    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen over  flex-col items-center bg-[#ffff] justify-between  pt-24 p-10 10 md:p-24">
          <FloatingNav navItems={navItems} />
        {children}
        </main>
      </body>
    </html>
  );
}
