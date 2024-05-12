"use server";

import { Tskill } from "@/types";

export const createSkill = async (data: Tskill) => {
  const res = await fetch("https://rajin-server.vercel.app/api/v1/skill", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const skillInfo = await res.json();
  return skillInfo;
};
