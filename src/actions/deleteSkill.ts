"use server";

export const deleteskill = async (id: string) => {
  const res = await fetch(
    `https://rajin-server.vercel.app/api/v1/skill/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const skillInfo = await res.json();
  return skillInfo;
};
