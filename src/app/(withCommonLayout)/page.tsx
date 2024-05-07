import Blog from "@/components/home/Blogs/Blog";
import Contact from "@/components/home/Contact/Contact";
import Projects from "@/components/home/Projects/Projects";
import Banner from "@/components/home/banner/Banner";
import Education from "@/components/home/education/Education";
import MySelf from "@/components/home/mySelf/MySelf";
import Skills from "@/components/home/skills/Skills";

const page = () => {
  return (
    <div>
      <Banner />
      <MySelf />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default page;
