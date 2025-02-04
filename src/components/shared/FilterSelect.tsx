import { cn } from "@/lib/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Option = {
  [key: string]: any;
};

interface FilterSelectProps<T extends Option | string> {
  options: any;
  label?: string;
  keyExtractor?: (item: T) => React.Key;
  displayExtractor?: (item: T) => string;
  onChange?: (selectedItem: T) => void;
  value: any;
  className?: string;
}

function FilterSelect<T extends Option | string>({
  options,
  label,
  keyExtractor,
  displayExtractor,
  onChange,
  value,
  className,
}: FilterSelectProps<T>) {
  const [selected, setSelected] = useState<T>(options?.[0]);

  const getKey = (item: T): React.Key => {
    if (keyExtractor) return keyExtractor(item);
    return typeof item === "object" ? item?.id || JSON?.stringify(item) : item;
  };

  const getDisplayValue = (item: T): string => {
    if (displayExtractor) return displayExtractor(item);
    return typeof item === "object"
      ? item?.name || JSON?.stringify(item)
      : item?.toString();
  };

  const handleChange = (value: T) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <ListboxButton
        className={cn(
          className,
          "relative w-[107px]  rounded py-1.5 px-2.5 truncate text-[#2B303466] font-medium  text-left text-sm/6 bg-[#FCFDFD]",
          "focus:outline-none data-[focus]:outline-none"
        )}
      >
        {/* <span className="capitalize">{label}: </span> */}
        <span className="font-bold">{getDisplayValue(value)}</span>
        <IoIosArrowDown
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-secondary"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        // transition
        className={clsx(
          "w-[var(--button-width)] rounded-md bg-white z-20 shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {options?.map((option: any) => (
          <ListboxOption
            key={getKey(option)}
            value={option}
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg cursor-pointer select-none group"
          >
            {label?.toLocaleLowerCase() == "status" && option?.color && (
              <div
                className="h-[10px] w-[10px] rounded-full"
                style={{ background: option?.color }}
              ></div>
            )}{" "}
            <div className="text-[#2B303466] text-sm/6 group-data-[selected]:bg-[#F6F6F6] group-data-[selected]:p-1 group-data-[selected]:rounded w-full">
              {getDisplayValue(option)}
            </div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default FilterSelect;
