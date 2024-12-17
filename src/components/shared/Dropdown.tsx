import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";

type OptionType = {
  value: string;
  label: string;
  flag: string;
};

type Props = {
  desc?: string;
  options: OptionType[];
};

const Dropdown = ({ desc, options }: Props) => {
  const [selectedValue, setSelectedValue] = useState(options?.[0]?.value || ""); // Default value is first option

  const selectedOption = options?.find((opt) => opt?.value === selectedValue);

  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
      <SelectTrigger className="flex items-center gap-4 border-none focus:ring-0 focus:outline-none">
        {selectedOption?.flag && (
          <div className="w-5 lg:w-10 lg:h-7">
            <img
              src={selectedOption?.flag}
              className="w-full h-full object-cover"
              alt={selectedOption?.label}
            />
          </div>
        )}
        <p className="text-sm font-semibold font-Nunito text-[#646464]">
          {selectedOption?.label}
        </p>
      </SelectTrigger>

      <SelectContent className="py-3 w-[250px]">
        {desc && (
          <div className="px-4 border-b">
            <p className="text-sm text-[#404040] font-Nunito">{desc}</p>
          </div>
        )}
        <SelectGroup>
          {options?.length > 0 ? (
            options?.map((option) => (
              <SelectItem key={option.value} value={option.value} className="px-4">
                <div className="flex items-center gap-5 h-14">
                  {option?.flag && (
                    <div className="w-6 h-6">
                      <img
                        src={option.flag}
                        className="w-full h-full object-cover"
                        alt={option.label}
                      />
                    </div>
                  )}
                  <p className="text-sm font-semibold font-Nunito text-[#404040]">
                    {option.label}
                  </p>
                </div>
              </SelectItem>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options found</div>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
