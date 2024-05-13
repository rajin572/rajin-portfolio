"use server";

export const deleteBlog = async (id: string) => {
  const res = await fetch(`https://rajin-server.vercel.app/api/v1/blog/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
