import React from "react";
import ProjectItems from "../_components/ProjectItems";
import Timline from "../_components/Timline";
import { FlipWords } from "@/components/ui/lip-words";

function page() {
  const words = ["engineer", "developer"];

  return (
    <div className="  max-w-5xl mx-auto px-8  mt-20">
      <div className="text-4xl  max-w-5xl px-8 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Software
        <FlipWords words={words} /> <br />
         
      </div>
      <Timline />
    </div>
  );
}

export default page;
