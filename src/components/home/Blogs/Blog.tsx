import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import { TBlogs } from "@/types";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/blog", {
    next: {
      revalidate: 30,
    },
  });

  const blogData = await res.json();

  const sortedBlogData = blogData?.data
    ?.slice()
    .sort(
      (a: { createdAt: number }, b: { createdAt: number }) =>
        b.createdAt - a.createdAt
    );
  return (
    <div className="mt-20">
      <div className="mt-10 flex justify-center items-center flex-col mb-20">
        <p className="text-primary-foreground font-bold mb-5 text-xl sm:text-2xl">
          Blogs
        </p>
        <h1 className=" text-foreground text-2xl  sm:text-4xl mb-3 font-bold place-items-start">
          My Top Blogs
        </h1>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div>
          {sortedBlogData.slice(0, 3).map((blog: TBlogs) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
        <div className="mt-10 text-center ">
          <Link href="/blogs">
            <button className="bg-transparent border-2 border-secondary px-4 py-2 rounded mt-5 text-foreground hover:bg-secondary duration-500">
              View All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
