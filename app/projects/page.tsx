import React from "react";
import ProjectItems from "../_components/ProjectItems";

function page() {

  const projects = [
    {
      title: "Vieo",
      description: "Vieo is the ultimate task management and whiteboard platform that  allows you to easily collaborate and share ideas with your team",
      image: "/vieo.png",
      link: "https://vieo.io/",
      sourceCode:""
    },
    {
      title: "MyBot",
      description: "Designed a SaaS application using React and FastAPI that enables users to create custom chatbots for their specific needs",
      image: "/images/projects/algochurn.png",
      link: "/project",
      sourceCode:""

    },
   
  ]
  return (
    <div className="grid  max-w-5xl mx-auto px-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mt-20">
      {
        projects.map((project, index) => (
          <ProjectItems
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))
      }
    </div>
  );
}

export default page;
