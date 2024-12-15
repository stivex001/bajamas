import { useState } from "react";
import { CustomSearchInput } from "../shared/CustomSearchInput";
import { NoticationBellIcon } from "@/assets/svgs/NotificationIcon";
import { AvarterIcon } from "@/assets/svgs/Avarter";
import { CustomArrowIcon } from "@/assets/svgs/ArrowsIcon";
import Dropdown from "../shared/Dropdown";
import englishFlag from "@/assets/images/en.png";
import frenchFlag from "@/assets/images/fr.png";
import spanishFlag from "@/assets/images/es.png";

const languages = [
  { label: "English", value: "en", flag: englishFlag },
  { label: "French", value: "fr", flag: frenchFlag },
  { label: "Spanish", value: "es", flag: spanishFlag },
];
spanishFlag;

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const languageOption = languages?.map((lang: any) => ({
    value: lang?.value,
    label: lang?.label,
    flag: lang?.flag,
  }));

  return (
    <nav className=" w-full h-[70px] sticky z-50 top-5 flex items-center justify-between px-8 bg-white py-4">
      <CustomSearchInput
        className="bg-[#F5F6FA] w-[388px] rounded-[19px] ml-6"
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="flex items-center">
        <div className="relative">
          <NoticationBellIcon />
          <div className="absolute -top-1 -right-1 bg-[#F93C65] w-4 h-4 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white font-Nunito mt-0.5 ">
              6
            </span>
          </div>
        </div>
        <div className="ml-7">
          <Dropdown desc="Select Language" options={languageOption} />
        </div>
        <div className="flex items-center gap-6 ml-6">
          <AvarterIcon />
          <p className="">Odejinmi emmanuel</p>
          <CustomArrowIcon />
        </div>
      </div>
    </nav>
  );
};
