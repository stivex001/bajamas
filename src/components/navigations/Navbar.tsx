import { useState } from "react";
import { CustomSearchInput } from "../shared/CustomSearchInput";
import { NoticationBellIcon } from "@/assets/svgs/NotificationIcon";
import { AvarterIcon } from "@/assets/svgs/Avarter";
import { CustomArrowIcon } from "@/assets/svgs/ArrowsIcon";
import Dropdown from "../shared/Dropdown";
import englishFlag from "@/assets/images/en.png";
import frenchFlag from "@/assets/images/fr.png";
import spanishFlag from "@/assets/images/es.png";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  ProfileWithBorderIcon,
  SettingIconsWithBorder,
} from "@/assets/svgs/SettingsIcon";
import logo from "../../../public/logo.png";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

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
    <>
      <div className="lg:hidden flex items-center gap-9  px-2 bg-white mb-2">
        <MobileNav />

        <div className="w-[148px]">
          <img src={logo} />
        </div>
      </div>
      <nav className=" w-full h-[70px] sticky z-50 top-5 flex items-center justify-between px-3 lg:px-8 bg-white py-4 gap-9 lg:gap-0">
        <CustomSearchInput
          className="bg-[#F5F6FA]  lg:w-[388px] rounded-[19px] lg:ml-6"
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <div className=" flex items-center">
          <Link to='/notifications' className="relative">
            <NoticationBellIcon />
            <div className="absolute -top-1 -right-1 bg-[#F93C65] w-4 h-4 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white font-Nunito mt-0.5 ">
                6
              </span>
            </div>
          </Link>
          <div className="ml-5 lg:ml-7">
            <Dropdown desc="Select Language" options={languageOption} />
          </div>
          <Popover>
            <PopoverTrigger>
              <div className="hidden lg:flex items-center gap-6 lg:ml-6">
                <AvarterIcon />
                <p className="hidden lg:block text-sm font-bold font-Nunito text-[#404040]">
                  Odejinmi emmanuel
                </p>
                <div className="">
                  <CustomArrowIcon />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="">
              <div className=" border-b ">
                <h1 className="text-base font-semibold font-Nunito text-[#404040] pb-2">
                  More
                </h1>
              </div>
              <div className="border-b">
                <div className="flex items-center gap-3 h-14 py-3 ">
                  <SettingIconsWithBorder />
                  <div className="space-y-1">
                    <h2 className="text-sm font-semibold font-Nunito text-darker">
                      Settings
                    </h2>
                    <p className="text-xs font-semibold font-Nunito text-[#B5B5B5]">
                      Change Password
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 h-14  py-3 ">
                  <ProfileWithBorderIcon />
                  <div className="space-y-1">
                    <h2 className="text-sm font-semibold font-Nunito text-darker">
                      Profile
                    </h2>
                    <p className="text-xs font-semibold font-Nunito text-[#B5B5B5]">
                      Update your profile
                    </p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </>
  );
};
