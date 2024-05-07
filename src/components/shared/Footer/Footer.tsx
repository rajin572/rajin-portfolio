import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-background text-foreground py-5 border-t-2 border-secondary mt-20 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:justify-items-center items-start pt-20">
          <div className="mb-5 lg:mb-0">
            <h1 className=" mb-3 text-primary-foreground font-bold text-3xl">
              Din Islam Rajin
            </h1>
            <p>
              I’m a web developer, specifically a MERN Stack Developer. I am a
              full fresher and I am looking for a job. I have a strong knowledge
              About HTML, CSS, JavaScript, TypeScript, ReactJs, Redux, NextJS,
              NodeJS ExpressJS, MongoDB. I have a positive outlook and am always
              willing to learn new things. I am a capable and consistent
              problem-solver skilled at prioritizing and managing projects with
              proficiency.
            </p>
          </div>
          <div className="mb-5 lg:mb-0 place-self-end">
            <h1 className="text-xl font-bold mb-3">Contact Me</h1>
            <ul>
              <li className="mb-2">
                3th Lane, R.K Mission Road Gopibag , Dhaka, Bangladesh
              </li>
              <li className="mb-2">
                Phone: <span className="font-bold">+8801647742754</span>
              </li>
              <li className="mb-2">
                {" "}
                Email:{" "}
                <span className="font-bold">din.islam.rajin572@gmail.com</span>
              </li>
              <li className="mb-2">
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
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-10/12 mx-auto mt-20" />
        <div className="flex justify-center py-8 text-lg">
          © Copyright {currentYear} by{" "}
          <span className="font-extrabold text-lg text-primary-foreground underline ps-2">
            {" "}
            Rajin
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
