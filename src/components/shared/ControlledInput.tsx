/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useController, Control } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type ControlledInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean; pattern?: RegExp; maxLength?: number };

  placeholder?: string;
  type?: string;
  method?: string;
  currency?: string;
  stack?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ComponentProps<typeof Input>;

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  control,
  rules,
  stack,
  placeholder = "",
  type = "text",
  method,
  variant = "primary",
  ...props
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const baseStyles = "w-full";
  const styles = {
    primary: "  focus:ring-blue-500",
    secondary:
      "border border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary:
      "border border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant], {
    [styles.invalid]: invalid,
  });

  const handleTVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 10) {
      e.target.blur();
    }

    onChange(e);
  };

  const handleLightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 11) {
      e.target.blur();
    }

    onChange(e);
  };

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    onChange(numericValue);
  };

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
      <div className={`${stack && "w-full"} flex items-center space-x-2`}>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={
            method === "cable"
              ? handleTVChange
              : method === "light"
              ? handleLightChange
              : type === "number"
              ? handleNumericInput
              : onChange
          }
          onBlur={onBlur}
          value={value}
          ref={ref}
          className={inputClassName}
          {...props}
        />
        {type === "color" && (
          <div
            className="w-8 h-8 border rounded"
            style={{ backgroundColor: value || "#ffffff" }}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 capitalize">{error.message}</p>
      )}
    </div>
  );
};

export default ControlledInput;
