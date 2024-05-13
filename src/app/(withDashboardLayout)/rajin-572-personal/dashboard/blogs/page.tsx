import DeleteBlogModal from "@/components/ui/DeleteBlogModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlogs } from "@/types";
import Image from "next/image";

const page = async () => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/blog", {
    cache: "no-store",
  });

  const blogData = await res.json();
  return (
    <div>
      <div className="mt-10 mb-20 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Blogs
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          My All Blogs
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Table>
        <TableCaption>A list of My Blogs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N0.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>publishDate</TableHead>
            <TableHead>Reading Time</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogData?.data.map((blog: TBlogs, i: number) => (
            <TableRow key={blog?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                {" "}
                <Image
                  src={blog?.image}
                  alt="product-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" w-40 h-20 "
                />
              </TableCell>
              <TableCell>{blog?.title}</TableCell>
              <TableCell>{blog?.publishDate}</TableCell>
              <TableCell>{blog?.readingTime}</TableCell>
              <TableCell>
                <DeleteBlogModal blog={blog} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
