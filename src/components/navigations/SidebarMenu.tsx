import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useModalClose } from "@/context/SheetCloseModal";
import SubMenu from "./SubMenu";
import { ArrowUpIcon } from "@/assets/svgs/ArrowsIcon";

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
                className={`w-full h-12 p-2 mb-2.5 flex items-center justify-start font-semibold rounded transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
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
                <p
                  className={`text-sm font-semibold  ${
                    isActive ? "text-white" : "text-darker"
                  }`}
                >
                  {label}
                </p>
                {sub && (
                  <ArrowUpIcon
                    className={`ml-auto size-3 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
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
