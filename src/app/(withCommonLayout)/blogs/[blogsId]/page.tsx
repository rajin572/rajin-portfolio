import Container from "@/components/ui/Container";
import { TBlogs } from "@/types";
import Image from "next/image";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

interface IBLogID {
  params: {
    blogsId: string;
  };
}

const BlogDetailsPage = async ({ params }: IBLogID) => {
  const res = await fetch(
    `https://rajin-server.vercel.app/api/v1/blog/${params?.blogsId}`,
    {
      cache: "no-store",
    }
  );

  const blog = await res.json();
  const { data }: { data: TBlogs } = blog;
  return (
    <div>
      <Container>
        <div className=" mt-20 text-foreground">
          {/* image */}
          <Image
            src={data?.image}
            alt="product-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[350px] sm:h-[500px]"
          />
          {/* header */}
          <div className="flex justify-between items-center mt-5 mb-3">
            <h1 className="text-2xl font-bold text-primary-foreground">
              {data?.title}
            </h1>
            <div className="flex justify-center items-center  text-foreground">
              <CiClock1 className="text-primary-foreground" />
              <p className="ps-1">{data?.readingTime} Min</p>
            </div>
          </div>
          {/* author and date time */}
          <div className="flex gap-5 items-center mb-10 font-semibold text-[#000000bf]">
            <div className="flex items-center text-foreground">
              <FaUser />
              <p className="ps-1">@{data?.author}</p>
            </div>
            <div className="flex justify-center items-center  text-foreground">
              <FaRegCalendarAlt className="text-primary-foreground" />
              <p className="ps-1">{data?.publishDate}</p>
            </div>
          </div>
          {/* category */}
          <div className=" flex justify-start items-center flex-wrap gap-2">
            {data?.technology.map((item: string, i: number) => (
              <span
                className="py-1 px-3 bg-purple-200 text-xs rounded text-primary-foreground"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
          {/* details */}
          <p className="mt-10">{data?.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailsPage;
