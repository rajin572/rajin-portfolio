import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { TProjects } from "@/types";
import Link from "next/link";

import React from "react";

const Projects = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/project", {
    next: {
      revalidate: 30,
    },
  });

  const projectData = await res.json();

  const sortedProjectData = projectData?.data
    ?.slice()
    .sort(
      (a: { ratting: number }, b: { ratting: number }) => b.ratting - a.ratting
    );

  return (
    <div className="py-20 ">
      <div className="mt-10 flex justify-center items-center flex-col mb-20">
        <p className="text-primary-foreground font-bold mb-5 text-xl sm:text-2xl">
          Projects
        </p>
        <h1 className=" text-foreground text-2xl  sm:text-4xl mb-3 font-bold place-items-start">
          My Top Projects
        </h1>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5">
          {sortedProjectData.slice(0, 3).map((project: TProjects) => (
            <ProjectCard key={project?._id} projects={project} />
          ))}
        </div>
        <div className="mt-10 text-center ">
          <Link href="/projects">
            <button className="bg-transparent border-2 border-secondary px-4 py-2 rounded mt-5 text-foreground hover:bg-secondary duration-500">
              View All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
