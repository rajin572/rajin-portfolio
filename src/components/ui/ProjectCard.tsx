"use client";

import { TProjects } from "@/types";
import useScrollGrow from "@/utils/ScrollGrow";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

type TProjectCardProps = {
  projects: TProjects;
  className?: string;
};

const ProjectCard = ({ projects, className }: TProjectCardProps) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div style={style} ref={componentRef} className="mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <div className={cn(className)}>
          <Link href={`/projects/${projects?._id}`} className="mb-5">
            <Image
              src={projects?.image}
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-full "
            />
          </Link>
        </div>
        <div className="pt-4 lg:pt-0 lg:px-4 flex-col ">
          <div>
            <Link href={`/projects/${projects?._id}`}>
              <h1 className="text-3xl font-bold mb-4 hover:text-primary-foreground duration-500 text-primary-foreground">
                {projects?.title}
              </h1>
            </Link>

            <p className="mb-10">
              {projects?.description}{" "}
              <Link href={`/projects/${projects?._id}`} className="mb-5">
                <button className="bg-transparent rounded text-secondary underline">
                  View Details..
                </button>
              </Link>
            </p>

            <div className=" flex justify-start items-center flex-wrap gap-2">
              {projects?.technology.map((item, i) => (
                <span
                  key={i}
                  className="py-[2px] px-2 bg-slate-800 hover:bg-secondary text-xs md:text-sm rounded text-primary-foreground hover:text-primary duration-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="mt-5 flex justify-start items-center flex-wrap gap-2">
              {/* Live Link  */}
              <Link href={projects?.liveLink} target="_blank">
                <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                  <GrView className="text-primary-foreground group-hover:text-primary text-sm" />
                  <p>Live</p>
                </div>
              </Link>
              {/* Github Link Client */}
              <Link href={projects?.clientLink} target="_blank">
                <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                  <FaGithub className="text-primary-foreground group-hover:text-primary text-sm" />
                  <p>Client</p>
                </div>
              </Link>
              {/* Github Link Server */}
              {projects?.serverLink ? (
                <Link href={projects?.serverLink} target="_blank">
                  <div className=" group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                    <FaGithub className="text-primary-foreground group-hover:text-primary text-sm " />
                    <p>Server</p>
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="mt-10 bg-secondary text-secondary border-secondary" /> */}
    </motion.div>
  );
};

export default ProjectCard;
