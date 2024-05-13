"use server";

import { TBlogs } from "@/types";

export const createBlog = async (data: TBlogs) => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
