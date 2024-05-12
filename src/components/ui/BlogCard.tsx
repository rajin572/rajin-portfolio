import { TBlogs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: TBlogs }) => {
  return (
    <div className="w-[280px] sm:w-[350px] lg:w-[300px] xl:w-[350px] border border-secondary rounded mt-5">
      <Image
        src={blog?.image}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[200px] object-fill rounded-t"
      />
      <div className="px-2 py-2">
        <h3 className=" mb-2 text-primary-foreground font-semibold text-lg ">
          <Link href={`/blogs/${blog?._id}`}>{blog?.title}</Link>
        </h3>
        <div className="flex justify-between items-center text-xs mb-5">
          <div className="flex justify-center items-center  text-foreground">
            <FaRegCalendarAlt className="text-primary-foreground" />
            <p className="ps-1">{blog?.publishDate}</p>
          </div>
          <div className="flex justify-center items-center  text-foreground">
            <CiClock1 className="text-primary-foreground" />
            <p className="ps-1">{blog?.readingTime} Min</p>
          </div>
        </div>
        <p className="text-slate-400">
          {blog?.description.slice(0, 150)}
          <Link
            href={`/blogs/${blog?._id}`}
            className="text-primary-foreground font-semibold cursor-pointer"
          >
            {" ...Read More."}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
