/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { useController, Control } from "react-hook-form";
import { Description, Field, Label, Select } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; 
import { Spinner } from "./Spinner";
import { truncateText } from "../../utils/formatStrings";
import { cn } from "../../lib/utils";

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
  stack?: boolean;
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
  stack,
  ...props
}) => {
  const {
    field: { onChange, onBlur, value = "", ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const hasValue = value !== undefined && value !== null && value !== "";

  const baseStyles =
    "rounded-lg bg-white py-2.5 px-3 w-full text-[#333333] focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 mt-2 block appearance-none cursor-pointer";
  const styles = {
    primary: "border border-tertiary/20 bg-[#F5F5F8]",
    secondary: "border-secondary bg-yellow-100",
    tertiary: "border-tertiary bg-green-100",
    hasValue: "border-primary/5 bg-primary/10",
    invalid: "bg-red-200",
  };

  const selectClassName = cn(baseStyles, styles[variant], {
    [styles.hasValue]: hasValue,
    [styles.invalid]: invalid,
  });

  return (
    <Field className={stack ? "flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-between w-full mb-4" : "mb-4 space-y-2"}>
      <Label
        className="text-base font-semibold capitalize text-[#333333]"
        htmlFor={name}
      >
        {label}
      </Label>

      <div className={`${stack && "w-full"} flex items-center space-x-2`}>
        <Select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className={selectClassName}
          disabled={loading}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {loading ? (
            <Spinner />
          ) : (
            Array.isArray(options) &&
            options.length > 0 &&
            options.map((option) =>
              typeof option === "string" ? (
                <option key={option} value={option} className="capitalize">
                  {truncateText(option, 80)}
                </option>
              ) : (
                <option
                  key={option?.value}
                  value={option?.value}
                  className="capitalize"
                >
                  {truncateText(option?.label, 80)}
                </option>
              )
            )
          )}
        </Select>
        <span className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2">
          {loading ? (
            <FaSpinner className="animate-spin text-secondary" />
          ) : (
            <FaChevronDown className="text-secondary" />
          )}
        </span>
      </div>

      {error && (
        <Description className="text-red-500 text-xs/4 line-clamp-1 mt-2">
          {error.message}
        </Description>
      )}
    </Field>
  );
};

export default CustomControlledSelect;
