"use client";

import { Tskill } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const icons = {
  initial: { y: 0 },
  animate: {
    y: 10,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const SkillCard = ({ skill }: { skill: Tskill }) => {
  return (
    <motion.div
      variants={icons}
      initial="initial"
      animate="animate"
      className="w-[120px] sm:w-[140px] text-center"
    >
      <div className="w-[120px] sm:w-[140px] h-[200px] border border-secondary rounded-full flex justify-center items-center flex-col hover:bg-secondary duration-500 text-primary-foreground hover:text-primary">
        <Image
          src={skill?.image}
          alt="skill-image"
          width={0}
          height={0}
          sizes="100vw"
          className=" w-[50px] h-[55px] "
        />
        <p className="mt-5 font-semibold text-2xl ">{skill?.percentage}%</p>
      </div>
      <p className="font-bold text-lg mt-2">{skill?.skillName}</p>
    </motion.div>
  );
};

export default SkillCard;
