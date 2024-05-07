import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="mt-10 flex justify-center items-center flex-col mb-20">
        <p className="text-primary-foreground font-bold mb-5 text-xl sm:text-2xl">
          Contact
        </p>
        <h1 className=" text-foreground text-2xl  sm:text-4xl mb-3 font-bold place-items-start">
          Connect With Me!
        </h1>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div>
          <p className="w-full md:w-[75%] lg:w-[50%] mx-auto text-center">
            My inbox is always open. Whenever you have a question or just want
            to say hi, <br /> I’ll try my best to get back to you!
          </p>
          <div className="mt-10 text-center">
            <Link href="mailto:din.islam.rajin572@gmail.com">
              <button className="bg-transparent border-2 border-secondary px-6 py-4 rounded font-bold text-foreground hover:bg-secondary duration-500">
                Send Me A Message
              </button>
            </Link>
          </div>
          <div className="mt-10">
            <h1 className=" text-foreground text-xl text-center font-extrabold">
              Follow Me
            </h1>
            <div className="flex justify-center items-center gap-5 my-5 ">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
