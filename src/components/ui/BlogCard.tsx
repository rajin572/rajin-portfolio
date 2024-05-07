import { TBlogs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: TBlogs }) => {
  return (
    <div className=" lg:h-[260px] w-full grid grid-cols-1 md:grid-cols-6 gap-4 justify-items-center items-center border border-secondary rounded p-2 mt-5">
      <Image
        src={blog?.image}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="md:col-span-2 w-full h-full lg:h-60 object-fill"
      />
      <div className="md:col-span-4 self-start px-2">
        <h3 className="text-2xl mb-2 text-foreground font-semibold">
          {blog?.title}
        </h3>
        <div className="flex justify-between items-center text-sm mb-5">
          <div className="flex justify-center items-center  text-foreground">
            <FaRegCalendarAlt className="text-primary-foreground" />
            <p className="ps-1">{blog?.publishDate}</p>
          </div>
          <div className="flex justify-center items-center  text-foreground">
            <CiClock1 className="text-primary-foreground" />
            <p className="ps-1">{blog?.readingTime} Min</p>
          </div>
        </div>
        <p className="mb-4 text-slate-400">
          {blog?.description.slice(0, 350)}
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
