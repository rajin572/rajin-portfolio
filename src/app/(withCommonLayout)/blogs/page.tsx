import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import { TBlogs } from "@/types";
import React from "react";

const BlogPage = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/blog", {
    cache: "no-store",
  });

  const blogData = await res.json();

  const sortedBlogData = blogData?.data
    ?.slice()
    .sort(
      (a: { createdAt: number }, b: { createdAt: number }) =>
        b.createdAt - a.createdAt
    );
  return (
    <div className="my-20">
      <h1 className="font-extrabold text-center text-foreground text-4xl mb-10">
        My Blogs
      </h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {sortedBlogData.map((blog: TBlogs) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
