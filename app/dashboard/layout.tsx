import SideNav from "@/app/ui/dashboard/sidenav";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overfow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
