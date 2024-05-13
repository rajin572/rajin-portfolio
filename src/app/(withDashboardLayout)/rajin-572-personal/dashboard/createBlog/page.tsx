"use client";

import useImageUpload from "@/utils/uploadImage";
import { FieldValues, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { createBlog } from "@/actions/createBlog";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImageUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Blog....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      if (imageUrl.status_code === 400) {
        throw new Error("ImageBB Can't Upload This Image Try Another Image");
      }

      const technologyArray = data.technology.split(", ");

      const blogData = {
        image: imageUrl?.data?.url,
        title: data.title,
        readingTime: Number(data.readingTime),
        author: data.author,
        technology: technologyArray,
        shortDescription: data.shortDescription,
        description: content,
      };

      const res = await createBlog(blogData);
      if (res) {
        toast.success("Blog Created Successfully", {
          id: toastId,
          duration: 1000,
        });
        reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      toast.error(String(err), {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="my-20">
      <div className="mt-10 mb-20 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-primary-foreground opacity-15">
          Blogs
        </h1>
        <p className="text-foreground font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          Create A New Blogs
        </p>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <form
        className="md:grid md:grid-cols-2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-image text-secondary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span> Image Link :</span>
          </label>
          <input
            type="file"
            {...register("image")}
            name="image"
            placeholder="Enter Your Image Link"
            required
            className="border-2 focus:border-secondary bg-primary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-white"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
              <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
            </svg>
            <span> Title :</span>
          </label>
          <input
            type="text"
            {...register("title")}
            name="title"
            placeholder="Enter Your Title"
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dollar-sign text-secondary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span> Reading Time :</span>
          </label>
          <input
            type="number"
            {...register("readingTime")}
            name="readingTime"
            placeholder="Enter Reading Time"
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span> Author Name:</span>
          </label>
          <input
            type="url"
            {...register("author")}
            name="author"
            placeholder="Enter Your Author name"
            defaultValue="din.islam.rajin"
            readOnly
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>
              {" "}
              Technology :{" "}
              <span className="text-sm text-secondary">
                (Separate Technologies By Coma)
              </span>
            </span>
          </label>
          <input
            type="text"
            {...register("technology")}
            name="technology"
            placeholder="Enter Your Technology"
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5 col-span-2">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text text-secondary"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
            <span> Short Description :</span>
          </label>
          <textarea
            {...register("shortDescription")}
            name="shortDescription"
            placeholder="Enter Your Short Description"
            required
            className="h-40 border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5 col-span-2">
          <label className="flex items-center text-foreground mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text text-secondary"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
            <span> Description :</span>
          </label>
          {/* Using React.forwardRef() to forward the ref */}
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            config={{ theme: "dark" }}
            className="text-primary bg-secondary"
          />
        </div>
        <div className=" mt-6 col-span-2">
          <button className="w-full border-2 border-secondary bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold py-2 rounded dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-plus"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            <span>Create Blog</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
