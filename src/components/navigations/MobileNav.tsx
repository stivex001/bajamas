import { useLocation, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { toast } from "sonner";
import { AvarterIcon } from "@/assets/svgs/Avarter";

import { HamburgerIcon } from "@/assets/svgs/MenuIcon";
import { generalLinks } from "./data";
import { useModalClose } from "@/context/SheetCloseModal";
import { useAuthStore } from "@/store/authStore";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { LogoutIcon } from "@/assets/svgs/NavigationIcons";

export const MobileNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout, currentUser } = useAuthStore();

  const { isOpen, openModal } = useModalClose();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/auth/login");
  };

  return (
    <Sheet open={isOpen} onOpenChange={openModal}>
      <SheetTrigger asChild className="lg:hidden py-3">
        <button onClick={openModal}>
          <HamburgerIcon />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex flex-col w-64 !bg-white">
        <div className=" flex items-center border-b p-6">
          {/* <img
            src={avatar}
            alt={avatar}
            className="rounded-full cursor-pointer"
          /> */}
          <AvarterIcon />
          <span className=" ml-2 text-sm font-bold text-gray-900 truncate ">
            {currentUser?.name}
          </span>
        </div>
        <div className="flex-grow overflow-y-auto hide-scrollbar no-scrollbar ">
          <div className=" space-y-6 ">
            <SidebarMenu links={generalLinks} pathname={pathname} mobile />
          </div>
        </div>
        <div className="px-4 py-4">
          <button
            onClick={handleLogout}
            className=" flex items-center px-12 py-4  !text-darker font-semibold text-base font-Nunito"
          >
            <LogoutIcon className="mr-2" />
            Logout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
