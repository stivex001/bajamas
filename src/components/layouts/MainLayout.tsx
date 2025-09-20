import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Navbar } from "../navigations/Navbar";
import Footer from "../navigations/Footer";

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
      <div className="scrollbar-hidden h-[calc(100vh-136px)] overflow-y-auto">
        {children}

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
