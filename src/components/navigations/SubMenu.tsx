import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useModalClose } from "@/context/SheetCloseModal";
import { ArrowUpIcon } from "@/assets/svgs/ArrowsIcon";

interface SubMenuProps {
  pathname: string;
  path: string;
  sub: SubLink[];
  isOpen: boolean;
}

interface SubLink {
  path: string;
  label: string;
  subSub?: SubSubLink[];
}

interface SubSubLink {
  path: string;
  label: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ pathname, path, sub, isOpen }) => {
  const [activeSubParent, setActiveSubParent] = useState<string | null>(null);
  const { closeModal } = useModalClose();
  if (!sub) return null;

  const handleSubParentClick = (subPath: string) => {
    setActiveSubParent(activeSubParent === subPath ? null : subPath);
    console.log(pathname);
  };

  return (
    <div
      className={`ml-6 mt-1 overflow-hidden transition-all ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      {sub.map((item: SubLink, index) => (
        <span
          key={item.path}
          className={`first-of-type:mt-4 relative flex flex-col items-start justify-start ml-2 space-y-1 h-fit animated-appearance ${
            index !== sub.length - 1
              ? "border-l-before"
              : "border-l-before last"
          }`}
        >
          <span className="border-b-[1px] rounded-bl-lg border-secondary/40 h-5 w-2.5 absolute -top-2.5 first-of-type:mt-2.5 "></span>
          <div className="flex items-center w-full">
            <NavLink
              to={`${path}${item.path}`}
              className={({ isActive }) =>
                `w-full py-2 h-full text-xs font-medium cursor-pointer ml-3 ${
                  isActive ? "text-primary font-extrabold" : "text-secondary"
                }`
              }
              onClick={(e) => {
                if (item.subSub) {
                  e.preventDefault();
                  handleSubParentClick(item.path);
                } else {
                  closeModal();
                }
              }}
            >
              {item.label}
            </NavLink>
            {item.subSub && (
              <ArrowUpIcon
                className={`ml-auto size-3 transition-transform ${
                  activeSubParent === item.path ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </span>
      ))}
    </div>
  );
};

export default SubMenu;
