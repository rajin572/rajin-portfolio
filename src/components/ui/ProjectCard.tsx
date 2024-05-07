import { TProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const ProjectCard = ({ projects }: { projects: TProjects }) => {
  return (
    <div className="bg-primary border border-secondary rounded w-[280px] md:w-[350px] lg:w-[310px]  xl:w-[380px]  h-[400px]">
      <Image
        src={projects?.image}
        alt="product-image"
        width={0}
        height={0}
        sizes="100vw"
        className=" w-full h-[200px] "
      />
      <div className="px-2 flex justify-between items-center flex-col h-[190px] py-2">
        <div>
          <Link href={`/projects/${projects?._id}`}>
            <h1 className="text-2xl font-bold mb-4 hover:text-primary-foreground duration-500">
              {projects?.title}
            </h1>
          </Link>
          <div className=" flex justify-start items-center flex-wrap gap-2">
            {projects?.technology.map((item, i) => (
              <span
                key={i}
                className="py-[2px] px-2 bg-purple-100 text-xs rounded text-primary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="mt-2 flex justify-center items-center flex-wrap gap-2">
            {/* Live Link  */}
            <Link href={projects?.liveLink} target="_blank">
              <span className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                <GrView className="text-primary-foreground group-hover:text-foreground text-sm" />
                Live
              </span>
            </Link>
            {/* Github Link Client */}
            <Link href={projects?.clientLink} target="_blank">
              <span className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                <FaGithub className="text-primary-foreground group-hover:text-foreground text-sm" />
                Client
              </span>
            </Link>
            {/* Github Link Server */}
            <Link href={projects?.serverLink} target="_blank">
              <span className=" group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded hover:text-foreground text-primary-foreground flex justify-center items-center  cursor-pointer gap-1">
                <FaGithub className="text-primary-foreground group-hover:text-foreground text-sm" />
                Server
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
