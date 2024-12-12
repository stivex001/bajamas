import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { VerifyEmailModal } from "../shared/VeriftEmailModa";
import { Sidebar } from "../navigations/Sidebar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const isEmailVerified = true;

  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-full overflow-x-clip ">
        <Sidebar />
        <div className="w-full lg:w-[82%]">
          {/* <Navbar /> */}
          <div className="scrollbar-hidden h-[90vh] p-4 overflow-y-auto bg-[#F5F5F8] no-scrollbar">
            {isEmailVerified ? children : <VerifyEmailModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
