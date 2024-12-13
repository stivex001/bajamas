import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useModalClose } from "@/context/SheetCloseModal";
import SubMenu from "./SubMenu";
import { ArrowRightIcon } from "@/assets/svgs/ArrowsIcon";

interface Link {
  path: string;
  label: string;
  sub?: any[];
}

interface SidebarMenuProps {
  links: Link[];
  pathname?: string;
  mobile?: boolean;
}

const isRouteActive = (currentPath: string, linkPath: string) => {
  if (linkPath === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(linkPath);
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ links, mobile }) => {
  const navigate = useNavigate();
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const location = useLocation();
  const { closeModal } = useModalClose();

  const handleParentClick = (path: string) => {
    setActiveParent(activeParent === path ? null : path);
  };

  return (
    <aside
      className={`pb-6 border-b border-gray-300 ${
        !mobile && "animated-appearance"
      }`}
    >
      <nav className="flex flex-col items-start justify-center space-y-1">
        {links?.map(({ path, label, sub }) => {
          const isActive = isRouteActive(location.pathname, path);
          const isOpen = activeParent === path;

          return (
            <div key={path} className="w-full h-full">
              <NavLink
                to={path}
                className={`w-full mb-2.5 gap-6 flex items-center font-semibold rounded transition-all `}
                onClick={(e) => {
                  if (sub) {
                    e.preventDefault();
                    handleParentClick(path);
                    navigate(path);
                  } else {
                    closeModal();
                  }
                }}
              >
                <div
                  className={`${
                    isActive ? "bg-primary" : ""
                  } h-12 w-[10px] rounded-[4px] group group-hover:bg-primary`}
                />

                <div
                  className={`${
                    isActive ? "bg-primary" : ""
                  }  w-full rounded-[6px] h-12 mr-6 flex items-center  px-6 text-white hover:bg-primary/50`}
                >
                  <p
                    className={`text-sm font-semibold ml-6 font-Nunito group-hover:text-white  ${
                      isActive ? "text-white" : "text-darker"
                    }`}
                  >
                    {label}
                  </p>
                  {sub && (
                    <ArrowRightIcon
                      className={`ml-auto ${
                        isActive ? "text-white" : "text-darker"
                      }  size-3 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>
              </NavLink>
              {sub && (
                <SubMenu
                  pathname={location.pathname}
                  path={path}
                  sub={sub}
                  isOpen={isOpen}
                />
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarMenu;


