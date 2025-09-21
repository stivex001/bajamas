import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Navbar } from "../navigations/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop />
      <div className="">
        <Navbar />
      </div>
      <div className="scrollbar-hidden h-[calc(100vh-136px)] mt-12 overflow-y-auto mx-auto max-w-7xl">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
