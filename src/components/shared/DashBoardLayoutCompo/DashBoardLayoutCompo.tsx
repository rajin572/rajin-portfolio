"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Sidebar from "../SideBar/SideBar";

const DashBoardLayoutCompo = ({ children }: { children: React.ReactNode }) => {
  const [slider, setSlider] = useState(false);
  return (
    <div className="grid grid-cols-12 relative bg-accent">
      <div
        className={`${
          slider
            ? "fixed left-0 top-0 bottom-0 lg:w-full w-3/4 sm:w-1/2"
            : "col-span-1 "
        } lg:relative lg:col-start-1 lg:col-end-3 z-40`}
      >
        <div className="sticky top-0">
          <Sidebar slider={slider} setSlider={setSlider} />
        </div>
      </div>
      {/* //*2nd grid */}
      <div
        className={`${slider ? "col-span-12" : "col-span-11"}  lg:col-span-10`}
      >
        <div className="bg-primary text-primary-foreground flex justify-center items-end flex-col px-5 lg:px-10 py-2 sticky top-0 z-[15]">
          <div className="flex justify-center items-center">
            <div className="text-end me-2">
              <h2 className="text font-bold">Din Islam Rajin</h2>
              <p className="text-slate-400 text-sm">Admin</p>
            </div>
            <Image
              src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
              width={40}
              height={40}
              alt="profile-image"
              className="rounded-full"
            ></Image>
          </div>
        </div>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default DashBoardLayoutCompo;
