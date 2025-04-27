import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThreeDotIcon } from "@/assets/svgs/MenuIcon";

type ActionProps = {
  desc?: string;
  showDelete?: boolean;
  showEdit?: boolean;
  showView?: boolean;
  showBlacklist?: boolean;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onBlacklist?: () => void;
};

export const ActionModal = ({
  desc,
  showView,
  showDelete,
  showEdit,
  showBlacklist,
  onView,
  onEdit,
  onDelete,
  onBlacklist
}: ActionProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-[85px] bg-tertiary hover:bg-primary/70 transition flex items-center justify-center rounded-[13px] py-2.5 outline-none focus:hidden">
          <ThreeDotIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] rounded-[4px] flex flex-col gap-3 bg-white  shadow-xl p-4">
        {showView && (
          <button onClick={onView} className="text-sm text-left text-[#2B2B2B]">
            View {desc}
          </button>
        )}

        {showEdit && (
          <button onClick={onEdit} className="text-sm text-left text-[#2B2B2B]">
            Edit {desc}
          </button>
        )}
        {showDelete && (
          <button
            onClick={onDelete}
            className="text-sm text-left text-[#2B2B2B]"
          >
            Delete
          </button>
        )}
        {showBlacklist && (
          <button
            onClick={onBlacklist}
            className="text-sm text-left text-[#2B2B2B]"
          >
            Blacklist
          </button>
        )}
      </PopoverContent>
    </Popover>
  );
};
