import React, { useState, useMemo } from "react";
import { useController, Control } from "react-hook-form";
import { Field, Label } from "@headlessui/react";
import { FaChevronDown, FaSpinner } from "react-icons/fa";
import { truncateText } from "../../utils/formatStrings";
import { cn } from "@/lib/utils";

type Option = { value: string | number; label: string };

type CustomSelectProps = {
  name: string;
  label: string;
  control: Control<any>;
  rules?: { required: boolean };
  options: string[] | Option[];
  placeholder?: string;
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
  searchable?: boolean;
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const CustomControlledSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  control,
  rules,
  options,
  placeholder = "Select an option",
  variant = "primary",
  loading = false,
  searchable = false,
  searchTerm = "",
  onSearchChange,
}) => {
  const {
    field: { onChange, value = "" },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on searchTerm
  const filteredOptions = useMemo(() => {
    if (!searchable || searchTerm === "") return options;
    return options?.filter((option) =>
      typeof option === "string"
        ? option?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        : option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  }, [searchable, searchTerm, options]);

  const baseStyles = "w-full h-14 px-3 bg-[#F5F5F9] rounded-md";
  const styles = {
    primary: "border-bordergray bg-gray1 focus:ring-primary",
    secondary: "border-secondary bg-yellow-100",
    tertiary: "border-tertiary bg-green-100",
    hasValue: "border-primary/5 bg-primary/10",
    invalid: "bg-red-200",
  };

  const selectClassName = cn(baseStyles, styles[variant], {
    [styles.hasValue]: value !== "",
    [styles.invalid]: invalid,
  });

  return (
    <Field className="space-y-3 relative">
      <Label
        className={`text-base font-medium capitalize text-boxgray`}
        htmlFor={name}
      >
        {label}
      </Label>

      <div className="relative ">
        <div
          className={cn(
            selectClassName,
            "flex items-center justify-between cursor-pointer text-boxgray"
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {value
            ? truncateText(
                (
                  options?.find(
                    (opt) => typeof opt !== "string" && opt?.value === value
                  ) as Option
                )?.label || placeholder,
                80
              )
            : placeholder}

          <FaChevronDown className="text-secondary" />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
            {searchable && (
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border rounded focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                />
              </div>
            )}
            <ul className="max-h-60 overflow-auto">
              {loading ? (
                <li className="flex justify-center items-center py-2">
                  <FaSpinner className="animate-spin text-secondary" />
                </li>
              ) : filteredOptions.length > 0 ? (
                filteredOptions.map((option) =>
                  typeof option === "string" ? (
                    <li
                      key={option}
                      onClick={() => {
                        onChange(option);
                        setIsOpen(false);
                        onSearchChange?.("");
                      }}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                    >
                      {truncateText(option, 80)}
                    </li>
                  ) : (
                    <li
                      key={option.value}
                      onClick={() => {
                        onChange(option?.value);
                        setIsOpen(false);
                        onSearchChange?.("");
                      }}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                    >
                      {truncateText(option.label, 80)}
                    </li>
                  )
                )
              ) : (
                <li className="py-2 px-4 text-center text-gray-500">
                  {label} not found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-xs mt-2">{error.message}</div>
      )}
    </Field>
  );
};

export default CustomControlledSelect;
