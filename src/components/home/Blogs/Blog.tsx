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
      <div className="my-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Blogs
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          My Recent Blogs
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {sortedBlogData.slice(0, 3).map((blog: TBlogs) => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
          <div className="mt-10 text-center ">
            <Link href="/blogs">
              <button className="bg-transparent border-2 border-secondary px-4 py-2 rounded mt-5 text-foreground hover:bg-secondary hover:text-primary duration-500">
                View All
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
