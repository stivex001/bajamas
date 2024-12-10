import { useState } from "react";

import { Label } from "../ui/label";
import { Control, useController } from "react-hook-form";
import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type CustomSelectProps = {
  options: any;
  placeholder?: string;
  className?: string;
  dropdownChoice?: boolean;
  name: string;
  label?: string;
  control?: Control<any>;
  rules?: { required: boolean };
  stack?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
};

export const CustomSelect = ({
  options,
  placeholder,
  stack,
  control,
  rules,
  className,
  label,
  name,
  variant = "primary",
}: CustomSelectProps) => {
  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options?.filter((option: any) =>
    option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const baseStyles = "w-full ";
  const styles = {
    primary: "focus:ring-blue-500",
    secondary:
      "border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary: "border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant], {
    [styles.invalid]: invalid,
  });

  return (
    <div
      className={
        stack
          ? "flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-between w-full mb-4"
          : "mb-4 space-y-2"
      }
    >
      <Label
        htmlFor={name}
        className={`text-base font-semibold capitalize text-[#333333]  ${
          stack && "lg:w-[40%]"
        }`}
      >
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          // dropdownChoice={dropdownChoice}
          className={`${inputClassName} ${className}`}
        >
          <SelectValue
            className="text-textbrown text-xs"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent>
          <div className="p-2 sticky top-0 z-50 bg-white">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm mb-2 outline-none"
            />
          </div>

          <SelectGroup>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: any) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <div className="p-2 text-gray-500">No options found</div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && (
        <div className="text-red-400 text-xs flex items-center gap-1 mt-1">
          <div className="w-3 h-3 rounded-full text-white bg-red-500 flex items-center justify-center">
            !
          </div>
          <p>{typeof error === "string" ? error : error.message}</p>
        </div>
      )}
    </div>
  );
};
