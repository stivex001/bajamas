import { Input } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/assets/svgs/SearchIcon";

interface SearchInputProps {
  className?: string;
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

export const CustomSearchInput = ({
  className,
  searchTerm = "",
  setSearchTerm = () => {},
}: SearchInputProps) => {
  const searchRef = useRef<HTMLLabelElement>(null);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <>
        <label
          ref={searchRef}
          className={cn(
            "flex relative items-center justify-stretch w-full rounded-lg border-[1px] border-secondary/20 bg-secondary/5 leading-[140%] py-1.5 px-3.5 text-base text-secondary focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer",
            className
          )}
          htmlFor="search"
        >
          <SearchIcon className="mr-2 text-[#F5F6FA]" color="#F5F6FA" />
          <Input
            className="w-full h-full bg-transparent outline-none focus:outline-none ring-0"
            placeholder="Search"
            name="search"
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm?.length > 0 && (
            <FaTimes
              className="text-tertiary transition-all duration-200 ease-out cursor-pointer hover:text-primary size-5 shadow-2xl"
              onClick={handleClearSearch}
            />
          )}
        </label>
      </>
    </>
  );
};
