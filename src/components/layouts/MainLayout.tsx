import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Sidebar } from "../navigations/Sidebar";
import { Navbar } from "../navigations/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {

  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-full overflow-x-clip ">
        <Sidebar />
        <div className="w-full lg:w-[82%]">
          <Navbar />
          <div className=" h-[calc(100vh-100px)] mt-7 px-[18px] lg:px-8 py-4 overflow-y-auto bg-[#F5F5F8] no-scrollbar scrollbar-hidden">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
