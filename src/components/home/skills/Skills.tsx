import Container from "@/components/ui/Container";
import SkillCard from "@/components/ui/SkillCard";
import { Tskill } from "@/types";
import React from "react";
import SkillShowPage from "./SkillShowPage";

const Skills = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/skill", {
    cache: "no-store",
  });
  const skillData = await res.json();

  return (
    <div className="py-20  overflow-hidden">
      <div className="mt-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Skills
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[55px]">
          My Expertise Skills
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <h1 className="text-3xl font-bold place-items-start text-primary-foreground opacity-35 mt-20">
          Hard Skills :
        </h1>
        <div>
          <SkillShowPage skillData={skillData?.data} />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
