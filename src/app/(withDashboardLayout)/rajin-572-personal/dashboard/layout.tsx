import DashBoardLayoutCompo from "@/components/shared/DashBoardLayoutCompo/DashBoardLayoutCompo";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashBoardLayoutCompo>{children}</DashBoardLayoutCompo>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
