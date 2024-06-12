"use client";

import SkillCard from "@/components/ui/SkillCard";
import { Tskill } from "@/types";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring", bounce: 0.5 },
  },
};

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

const SkillShowPage = ({ skillData }: { skillData: Tskill[] }) => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <motion.div
      ref={view}
      variants={intro}
      initial="hidden"
      animate={inView ? "visible" : ""}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-y-10 mt-10"
    >
      {skillData?.map((skill: Tskill) => (
        <motion.div variants={introChildren} key={skill?._id}>
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillShowPage;
