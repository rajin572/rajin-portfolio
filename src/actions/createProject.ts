"use server";

import { TProjects } from "@/types";

export const createProject = async (data: TProjects) => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectInfo = await res.json();
  return projectInfo;
};
