import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-[90%] max-w-[1250px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
