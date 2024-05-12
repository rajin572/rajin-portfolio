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
          <div className="w-full h-[250px] sm:h-[400px]  lg:h-[350px] xl:h-[400px] border-2 flex justify-center items-center">
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
                      className="py-[2px] px-2 bg-slate-800 hover:bg-secondary text-xs md:text-sm rounded text-primary-foreground hover:text-primary duration-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex justify-start items-center flex-wrap gap-2">
                  {/* Live Link  */}
                  <Link href={project?.data?.liveLink} target="_blank">
                    <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                      <GrView className="text-primary-foreground group-hover:text-primary text-sm" />
                      <p>Live</p>
                    </div>
                  </Link>
                  {/* Github Link Client */}
                  <Link href={project?.data?.clientLink} target="_blank">
                    <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                      <FaGithub className="text-primary-foreground group-hover:text-primary text-sm" />
                      <p>Client</p>
                    </div>
                  </Link>
                  {/* Github Link Server */}
                  <Link href={project?.data?.serverLink} target="_blank">
                    <div className=" group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                      <FaGithub className="text-primary-foreground group-hover:text-primary text-sm " />
                      <p>Server</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="px-5 mt-5 marker:text-secondary">
              {project?.data?.keyFeature.map((item: string, i: number) => (
                <li
                  className="list-disc 
                list-outside mb-2"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5">{project?.data?.description}</p>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
