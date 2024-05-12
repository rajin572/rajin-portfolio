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
      <Table>
        <TableCaption>A list of My Projects</TableCaption>
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
                  className=" w-20 h-20 "
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
