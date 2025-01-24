import { useController, Control } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { AddIcon, EmojiIcon } from "@/assets/svgs/MenuIcon";

type ControlledInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean; pattern?: RegExp; maxLength?: number };

  placeholder?: string;
  type?: string;
  method?: string;
  currency?: string;
  maxLength?: number;
  dontShowTime?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ComponentProps<typeof Textarea>;

const ControlledTextAreaInput = ({
  label,
  name,
  control,
  rules,
  placeholder = "",
  // variant = "primary",
  maxLength = 160,
}: ControlledInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    // fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="space-y-4">
      <Label
        htmlFor={name}
        className={`text-base font-medium capitalize text-boxgray`}
      >
        {label}
      </Label>
      <div className="w-full">
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className="w-full h-[120px] border border-[#DDDDDD] rounded-[5px] p-2.5 placeholder:text-sm placeholder:text-[#757575]"
        />
        <div className="bg-[#eeeeee] rounded-[5px] h-10 px-1.5 py-2.5 flex items-center justify-between">
          <p className="text-sm text-[#AAAAAA]">
            {value?.length ?? 0}/{maxLength}
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md bg-[AAAAAA] text-[#AAAAAA]"
            >
              <AddIcon /> Add variables
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
            >
              <EmojiIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlledTextAreaInput;
