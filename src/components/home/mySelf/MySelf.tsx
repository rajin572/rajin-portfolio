import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MySelf = () => {
  return (
    <div className="w-full py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-10 justify-items-center my-10">
          <div className="lg:col-span-2">
            <div className=" mb-5">
              <h1 className=" text-foreground text-3xl mb-1 font-bold">
                About Me :
              </h1>
              <div className="w-48 h-1 bg-secondary rounded "></div>
            </div>
            <p className="text-slate-300">
              I’m a web developer, specifically a MERN Stack Developer. I am
              passionate about my work and my goal. My goal is to leverage my
              expertise in MongoDB, Express.js, React, and Node.js to contribute
              to innovative and dynamic projects within a forward-thinking
              organization. I plan to further deepen my knowledge of the MERN
              stack and enhance my proficiency in both front-end and back-end
              development. I have a strong knowledge About HTML, CSS,
              JavaScript, TypeScript, ReactJs, Redux, NextJS, NodeJS ExpressJS,
              MongoDB. I may not have a computer science degree, but I have
              learned the ropes through hands-on experience and a strong desire
              to build cool stuff on the internet. My confidence, my passion to
              succeed, my ability to dream are the ultimate things that drives
              my life. I have a positive outlook and am always willing to learn
              new things. I am a capable and consistent problem-solver skilled
              at prioritizing and managing projects with proficiency.
            </p>
            <Link
              href="https://drive.google.com/file/d/113GzghW9Nxo6tJpTNNVq7st4czO-Q6g3/view?usp=sharing"
              target="_blank"
            >
              <button className="bg-transparent border-2 border-secondary px-4 py-2 rounded mt-5 text-foreground hover:bg-secondary hover:text-primary duration-500">
                My Resume
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://i.ibb.co/Ks2dnfb/Rajin-photo-whte.png"
              alt="my-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[380px] border-2 border-secondary rounded"
            />
            <div className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[380px] bg-transparent border-2 border-secondary rounded -mt-[290px] ml-[10px] md:-mt-[340px] lg:-mt-[370px]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySelf;
