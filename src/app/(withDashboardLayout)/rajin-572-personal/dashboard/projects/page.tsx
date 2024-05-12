import DeleteProjectModal from "@/components/ui/DeleteProjectModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const ProjectTablePage = async () => {
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
    <div>
      <Table>
        <TableCaption>A list of My Projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N0.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Links</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjectData.map((project: TProjects, i: number) => (
            <TableRow key={project?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                {" "}
                <Image
                  src={project?.image}
                  alt="product-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" w-40 h-20 "
                />
              </TableCell>
              <TableCell>{project?.title}</TableCell>
              <TableCell>{project?.ratting}</TableCell>
              <TableCell className="flex justify-start items-center gap-2">
                {/* Live Link  */}
                <Link href={project?.liveLink} target="_blank">
                  <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                    <GrView className="text-primary-foreground group-hover:text-primary text-sm" />
                    <p>Live</p>
                  </div>
                </Link>
                {/* Github Link Client */}
                <Link href={project?.clientLink} target="_blank">
                  <div className="group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                    <FaGithub className="text-primary-foreground group-hover:text-primary text-sm" />
                    <p>Client</p>
                  </div>
                </Link>
                {/* Github Link Server */}
                <Link href={project?.serverLink} target="_blank">
                  <div className=" group py-1 px-3 duration-500 bg-background hover:bg-secondary text-sm rounded  text-primary-foreground flex justify-center items-center hover:text-primary border border-secondary cursor-pointer gap-1">
                    <FaGithub className="text-primary-foreground group-hover:text-primary text-sm " />
                    <p>Server</p>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <DeleteProjectModal project={project} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTablePage;
