/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useController, Control } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { EyeIcon } from "@/assets/svgs/MenuIcon";

type ControlledInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean; pattern?: RegExp; maxLength?: number };

  placeholder?: string;
  type?: string;
  method?: string;
  currency?: string;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ComponentProps<typeof Input>;

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  control,
  rules,
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

  const baseStyles = "w-full h-14";
  const styles = {
    primary: "border-bordergray bg-gray1 focus:ring-primary",
    secondary:
      "border border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary:
      "border border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant], {
    [styles.invalid]: invalid,
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`space-y-3`}>
      <Label
        htmlFor={name}
        className={`text-base font-medium capitalize text-boxgray`}
      >
        {label}
      </Label>
      <div className={` flex items-center space-x-2 relative`}>
        <Input
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
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
        {type === "password" && (
          <div
            className="absolute right-0 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <EyeIcon />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 capitalize">{error.message}</p>
      )}
    </div>
  );
};

export default ControlledInput;
