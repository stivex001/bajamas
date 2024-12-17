import { useAuthStore } from "@/store/authStore";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../../public/logo.png";
import SidebarMenu from "./SidebarMenu";
import { generalLinks } from "./data";



export const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/auth/login");
  };

  return (
    <div className="hidden lg:flex flex-col lg:w-[18%] bg-white h-screen overflow-y-scroll scrollbar-hidden">
      <div className="w-[148px] h-10 mx-auto">
        <img src={logo} />
      </div>
      <div className="flex-grow overflow-y-auto no-scrollbar  pt-9">
        <div>
          <SidebarMenu links={generalLinks} pathname={pathname} />
        </div>
      </div>
      <button
        onClick={handleLogout}
        className=" flex items-center px-20 py-4  text-darker font-semibold text-base font-Nunito"
      >
        Logout
      </button>
    </div>
  );
};
