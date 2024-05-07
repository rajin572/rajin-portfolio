import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
