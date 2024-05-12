"use server";

export const deleteProject = async (id: string) => {
  const res = await fetch(
    `https://rajin-server.vercel.app/api/v1/project/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const projectInfo = await res.json();
  return projectInfo;
};
