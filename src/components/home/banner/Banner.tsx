"use client";
import Container from "@/components/ui/Container";
import Lottie from "lottie-react";
import bannerLottie from "../../../assets/bannerLottie.json";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="-mt-10">
      <div className="h-fit pt-20 lg:py-0 lg:h-screen w-full bg-background bg-grid-white/[0.2]  flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="backdrop-opacity-70 backdrop-blur w-full h-full flex justify-center items-center">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-0 gap-x-0 lg:gap-x-2 justify-items-center items-center">
              <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-foreground mb-3 md:mb-5">
                  <span className="block md:inline-block">Hey, I&apos;M</span>
                  <span className="text-primary-foreground font-extrabold">
                    {" "}
                    Din Islam Rajin
                  </span>
                </h1>
                <h3 className="text-2xl lg:text-3xl text-foreground font-semibold mb-5 md:mb-10">
                  I am a
                  <span className="text-primary-foreground">
                    {" "}
                    <Typewriter
                      words={[
                        "MERN Stack Developer",
                        "Frontend Developer",
                        "React Developer",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h3>
                <p className="text-slate-300">
                  I’m a web developer, specifically a MERN Stack Developer. I
                  have a strong knowledge About HTML, CSS, JavaScript,
                  TypeScript, ReactJs, Redux, NextJS, NodeJS ExpressJS, MongoDB.
                  I am a capable and consistent problem-solver skilled at
                  prioritizing and managing projects with proficiency.
                </p>
                <div className="flex justify-start items-center gap-5 my-5">
                  <Link href="https://github.com/rajin572/" target="_blank">
                    <FaGithub className="text-primary-foreground cursor-pointer  text-2xl" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/din-islam-rajin/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-primary-foreground cursor-pointer text-2xl" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/din.islam.rajin"
                    target="_blank"
                  >
                    <FaFacebook className="text-primary-foreground cursor-pointer  text-2xl" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/dir_razin_572/"
                    target="_blank"
                  >
                    <FaInstagramSquare className="text-primary-foreground cursor-pointer text-2xl" />
                  </Link>
                </div>

                <Link
                  href="https://drive.google.com/file/d/113GzghW9Nxo6tJpTNNVq7st4czO-Q6g3/view?usp=sharing"
                  target="_blank"
                >
                  <button className="bg-transparent border-2 border-secondary px-4 py-2 rounded mt-5 text-foreground hover:bg-secondary hover:text-primary duration-500">
                    My Resume
                  </button>
                </Link>
              </div>
              <div>
                <div className="">
                  <Lottie animationData={bannerLottie} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
