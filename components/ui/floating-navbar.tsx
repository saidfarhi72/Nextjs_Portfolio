"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./animated-modal";
import { Search, SearchIcon } from "lucide-react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { search } from "@/utils/data";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const pathname = usePathname();

  console.log(pathname);
  const placeholders = [
    "What's the skills you search for?",
    "what's the experience you search for",
    "What's the project you search for?",
    "What's the blog you search for?",
    "what's the technology you search for?",
  ];
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { highlightedText: any; field: string; name: string; text: string }[]
  >([]);

  const handleSearch = (query: any) => {
    if(query.length < 2) {
      setResults([]);
      return
    };
    const searchResults = search(query);
    console.log("data", searchResults);
    setResults(searchResults);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);

    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);

    console.log("submitted");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <a
          className="font-bold mr-9   text-sm flex items-center justify-center text-black space-x-2"
          href="/"
        >
          <img
            src="profile.jpg"
            width={30}
            height={30}
            className="transition duration-500  blur-0 scale-100 rounded-full "
            alt=""
          />
          <span className="font-inter font-bold">FARHI Said</span>
        </a>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              pathname === navItem.link
                ? "font-bold text-black dark:text-white"
                : ""
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link href="/resume.pdf" target="_blank">
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Download CV</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </Link>
        <Modal>
          <ModalTrigger>
            <div className=" text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white pr-2 py-2 rounded-full">
              <SearchIcon className="w-5 "  />
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="overflow-scroll">
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
              </h4>
              <div className="mx-8 ">
                <div className="max-w-3xl  mx-auto divide-y divide-gray-800 relative">
                  <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-gray-400 to-transparent -left-4 md:-left-10">
                    <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-full bg-green-500 shadow-[0_0_0_1px_#ffffff10] rotate-180 left-1"></span>
                  </div>

                  {results.map((result, idx) => (
                    <div className="border-b border-gray-800 " key={idx}>
                      <h1 className="text-md font-bold text-black my-2 relative">
                        <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                        {result.name}
                      </h1>
                      <div className="">
                        <div className="flex flex-row space-x-2 items-start my-2">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="text-green-500 mt-[3px] flex-shrink-0"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span className="text-black text-sm md:text-sm">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: result.highlightedText,
                              }}
                            />
                          </span>
                        </div>
                      </div>
                      <style jsx>{`
                        .highlight {
                          background-color: yellow;
                        }
                      `}</style>
                    </div>
                  ))}
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </motion.div>
    </AnimatePresence>
  );
};
