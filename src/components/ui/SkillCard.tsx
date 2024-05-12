import { Tskill } from "@/types";
import Image from "next/image";

const SkillCard = ({ skill }: { skill: Tskill }) => {
  return (
    <div className="w-[120px] sm:w-[140px] text-center">
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
    </div>
  );
};

export default SkillCard;
