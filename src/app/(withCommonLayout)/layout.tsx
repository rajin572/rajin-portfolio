import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import { Toaster } from "sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CommonLayout;
