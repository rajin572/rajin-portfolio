"use client";

import Link from "next/link";
import { Dispatch } from "react";

type TSlider = {
  slider: boolean;
  setSlider: Dispatch<React.SetStateAction<boolean>>;
};

const SideBarMenuItems = [
  { id: "1", name: "Dashboard", route: "/rajin-572-personal/dashboard" },
  {
    id: "2",
    name: "Create Project",
    route: "/rajin-572-personal/dashboard/createProject",
  },
  {
    id: "3",
    name: "Projects",
    route: "/rajin-572-personal/dashboard/projects",
  },
  {
    id: "4",
    name: "Create Skill",
    route: "/rajin-572-personal/dashboard/createSkill",
  },
  {
    id: "5",
    name: "Skills",
    route: "/rajin-572-personal/dashboard/skills",
  },
  {
    id: "6",
    name: "Create Blog",
    route: "/rajin-572-personal/dashboard/createBlog",
  },
  {
    id: "7",
    name: "Blogs",
    route: "/rajin-572-personal/dashboard/blogs",
  },
];

const Sidebar = ({ slider, setSlider }: TSlider) => {
  return (
    <div className=" bg-primary text-primary-foreground h-screen pt-5">
      {/* //* SideBar Collaps Buttons */}
      <div className="lg:hidden">
        {slider ? (
          <div className="flex justify-center items-end flex-col px-5">
            <button onClick={() => setSlider(!slider)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button onClick={() => setSlider(!slider)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>
      {/* //* SideBar Collaps Menus */}
      <div className={`${slider ? "block" : "hidden lg:block "} `}>
        <h1 className="text-2xl cursor-pointer flex justify-start items-center px-5 mb-10">
          <Link href="/">
            <span className="font-bold underline">Rajin</span>
          </Link>
        </h1>
        <div className="hidden lg:block ">
          <ul className=" flex justify-center items-start flex-col gap-5 px-5">
            {SideBarMenuItems.map((navItem) => (
              <Link className="w-full" key={navItem.id} href={navItem.route}>
                <li className="border py-1 text-center border-secondary w-full hover:bg-secondary hover:text-primary bg-primary text-secondary duration-500 cursor-pointer">
                  {navItem.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="block lg:hidden">
          <ul className=" flex justify-center items-start flex-col gap-5  px-5">
            {SideBarMenuItems.map((navItem) => (
              <Link className="w-full" key={navItem.id} href={navItem.route}>
                <li className="border py-1 text-center border-secondary w-full hover:bg-secondary hover:text-primary bg-primary text-secondary duration-500 cursor-pointer">
                  {navItem.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
