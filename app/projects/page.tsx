import React from "react";
import ProjectItems from "../_components/ProjectItems";
import { FlipWords } from "@/components/ui/lip-words";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import ProjectItemsNot from "../_components/ProjectItemsNot";
import Image from "next/image";

function page() {
  const projects = [
    {
      title: "Vieo",
      description:
        "Vieo is the ultimate task management and whiteboard platform that  allows you to easily collaborate  with your team",
      image: "/vieo.png",
      link: "https://vieos.vercel.app/",
      sourceCode: "",
    },
  ];
  const projectsNot = [
    {
      title: "MyBot",
      description:
        "Designed a SaaS application using React and FastAPI that enables users to create custom chatbots for their specific needs",
      image: "/chatbot.png",
      link: "/project",
      sourceCode: "",
    },
  ];
  const words = ["Innovative", "Creative", "Robust", "Scalable", "Efficient"];

  return (
    <>
      <div className="text-4xl  mt-8 max-w-5xl px-8 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Crafting
        <FlipWords words={words} /> <br />
        Software Solutions
      </div>
      <div className="grid  max-w-5xl mx-auto px-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mt-20">
        {projects.map((project, index) => (
          <ProjectItems
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}
        {projectsNot.map((project, index) => (
          <Modal key={index}>
            <ModalTrigger>
              <ProjectItemsNot
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                sourceCode={project.sourceCode}
              />
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Project Not depyed yet
                </h4>
                <Image
                  alt="Tailwind Master Kit"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0  "
                  src="/NotDeplyed.png"
                  layout="fill"
                  quality={75}
                />
              </ModalContent>
            
            </ModalBody>
          </Modal>
        ))}
      </div>
    </>
  );
}

export default page;
