import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

interface IProjectId {
  params: {
    projectsId: string;
  };
}

const ProjectDetailsPage = async ({ params }: IProjectId) => {
  const res = await fetch(
    `https://rajin-server.vercel.app/api/v1/project/${params?.projectsId}`,
    {
      cache: "no-store",
    }
  );

  const project = await res.json();

  return (
    <div className="mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start ">
          <div className="w-full h-[350px] sm:h-[500px] border-2 flex justify-center items-center">
            <Image
              src={project?.data?.image}
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
          <div>
            <div>
              <div className="pb-5 border-b-2 border-b-zinc-900 mb-10">
                <div className="flex justify-between items-center gap-2  mb-3">
                  <h1 className="text-2xl font-bold text-primary-foreground">
                    {project?.data?.title}
                  </h1>
                </div>
                <div className=" flex justify-start items-center flex-wrap gap-2">
                  {project?.data?.technology.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="py-1 px-3 bg-purple-200 text-xs rounded text-primary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ul className="px-5 mt-5">
              {project?.data?.keyFeature.map((item: string, i: number) => (
                <li className="list-disc" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5">{project?.data?.description}</p>
            <div className="mt-10 flex justify-start items-center flex-wrap gap-2">
              {/* Live Link  */}
              <Link href={project?.data?.liveLink} target="_blank">
                <span className="group py-1 px-3 duration-500 bg-primary hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                  <GrView className="text-primary-foreground group-hover:text-foreground text-sm" />
                  Live
                </span>
              </Link>
              {/* Github Link Client */}
              <Link href={project?.data?.clientLink} target="_blank">
                <span className="group py-1 px-3 duration-500 bg-primary hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                  <FaGithub className="text-primary-foreground group-hover:text-foreground text-sm" />
                  Client
                </span>
              </Link>
              {/* Github Link Server */}
              <Link href={project?.data?.serverLink} target="_blank">
                <span className=" group py-1 px-3 duration-500 bg-primary hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                  <FaGithub className="text-primary-foreground group-hover:text-foreground text-sm" />
                  Server
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
