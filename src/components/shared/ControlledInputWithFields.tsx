/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useController, Control } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { EmojiIcons } from "@/assets/svgs/MenuIcon";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ControlledInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean; pattern?: RegExp; maxLength?: number };

  placeholder?: string;
  type?: string;
  method?: string;
  currency?: string;
  dontShowTime?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ComponentProps<typeof Input>;

const ControlledInputWithFields: React.FC<ControlledInputProps> = ({
  label,
  name,
  control,
  rules,
  placeholder = "",
  type = "text",
  method,
  variant = "primary",
  dontShowTime = false,
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
    primary: "border-bordergray bg-gray1 focus:ring-primary w-full",
    secondary:
      "border border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary:
      "border border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant], {
    [styles.invalid]: invalid,
  });

  const variableMap: Record<string, string> = {
    Email: "email",
    "First name": "first_name",
    "Last name": "last_name",
    "Phone Number": "phone_number",
    DOB: "dob",
    "Registration Date": "registration_date",
    Type: "type",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const options = Object.keys(variableMap);

  const filteredOptions = options?.filter((option: any) =>
    option?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const handleSelectChange = (selectedLabel: string) => {
    const variableFormat = `\${${variableMap[selectedLabel]}}`;
    onChange(value ? `${value} ${variableFormat}` : variableFormat);
  };

  const handleEmojiSelect = (emoji: any) => {
    onChange(value ? `${value} ${emoji.native}` : emoji.native);
    setShowEmojiPicker(false);
  };

  const handleBackdropClick = () => {
    setShowEmojiPicker(false);
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
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className={inputClassName}
          {...props}
        />
        <div className="absolute right-0 lg:right-2 cursor-pointer flex items-center lg:gap-1">
          <div className="relative">
            <div
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className="cursor-pointer"
            >
              <EmojiIcons />
            </div>
            {showEmojiPicker && (
              <div className="absolute right-0 -top-10 z-[99]">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} />
              </div>
            )}
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className=" lg:w-[130px] h-7 border-none bg-transparent placeholder:text-[#555555]">
              <SelectValue placeholder="Custom fields" />
            </SelectTrigger>
            <SelectContent>
              <div className=" sticky top-0 z-50 ">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Custom Fields."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm mb-2 outline-none"
                />
              </div>
              <SelectGroup>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option: any) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No options found</div>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {showEmojiPicker && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50"
          onClick={handleBackdropClick}
        ></div>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-500 capitalize">{error.message}</p>
      )}
    </div>
  );
};

export default ControlledInputWithFields;
