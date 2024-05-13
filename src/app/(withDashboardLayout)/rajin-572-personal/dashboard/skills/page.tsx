import DeleteSkillModal from "@/components/ui/DeleteSkillModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tskill } from "@/types";
import Image from "next/image";
import React from "react";

const SkillsTablePage = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/skill", {
    cache: "no-store",
  });

  const skillData = await res.json();

  return (
    <div>
      <div className="mt-10 mb-20 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Skills
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          My All Expertise Skills
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Table>
        <TableCaption>A list of My Skills</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N0.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Skill Name</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skillData?.data.map((skill: Tskill, i: number) => (
            <TableRow key={skill?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                {" "}
                <Image
                  src={skill?.image}
                  alt="product-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" w-10 h-10 "
                />
              </TableCell>
              <TableCell>{skill?.skillName}</TableCell>
              <TableCell>{skill?.percentage}</TableCell>

              <TableCell>
                <DeleteSkillModal skill={skill} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SkillsTablePage;
