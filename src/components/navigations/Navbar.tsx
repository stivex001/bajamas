import { useState } from "react";
import { CustomSearchInput } from "../shared/CustomSearchInput";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="fixed w-full z-50 top-5 flex items-center justify-between bg-white py-4 px-20">
      <CustomSearchInput
        className="bg-[#F5F6FA] w-[388px] rounded-[19px]"
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
    </nav>
  );
};
