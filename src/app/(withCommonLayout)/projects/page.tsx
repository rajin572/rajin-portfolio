import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { TProjects } from "@/types";
import React from "react";

const ProjectPage = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/project", {
    cache: "no-store",
  });

  const projectData = await res.json();

  const sortedProjectData = projectData?.data
    ?.slice()
    .sort(
      (a: { ratting: number }, b: { ratting: number }) => b.ratting - a.ratting
    );
  return (
    <div className="py-20">
      <h1 className="font-extrabold text-center text-foreground text-4xl mb-10">
        My Projects
      </h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5">
          {sortedProjectData.map((project: TProjects) => (
            <ProjectCard key={project?._id} projects={project} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectPage;
