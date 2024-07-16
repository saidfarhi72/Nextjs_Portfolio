"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Comming",
    },
    {
      text: "soon.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          We are working hard to bring you this page. Bookmark this page
          to stay tuned!
        </p>
      </div>
    </div>
  );
}
