import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import Html from "../public/Skills/html.png";
 import Javascript from "../public/Skills/javascript.png";
import ReactImg from "../public/Skills/react.png";
import NextJS from "../public/Skills/nextjs.png";
 const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Muzix"
            backgroundImg={Html}
            projectUrl="/muzix"
            tech="React JS"
          />
          <ProjectItem
            title="THe Kwan"
            backgroundImg={ReactImg}
            projectUrl="/muzix"
            tech="React JS"
          />
          <ProjectItem
            title="Next Sign in"
            backgroundImg={NextJS}
            projectUrl="/muzix"
            tech="React JS"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={Javascript}
            projectUrl="/muzix"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
