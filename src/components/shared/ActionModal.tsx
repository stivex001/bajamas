import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ThreeDotIcon } from "@/assets/svgs/MenuIcon";

type ActionProps = {
  desc: string;
  showDelete?: boolean;
  showEdit?: boolean;
  showView?: boolean;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const ActionModal = ({
  desc,
  showView,
  showDelete,
  showEdit,
  onView,
  onEdit,
  onDelete,
}: ActionProps) => {
  return (
    <Popover className="relative">
      <PopoverButton>
        <div className="w-[85px] bg-tertiary hover:bg-primary/70 transition flex items-center justify-center rounded-[13px] py-2.5 outline-none focus:hidden">
          <ThreeDotIcon />
        </div>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className=" flex flex-col gap-3 bg-white rounded-lg shadow-xl p-4"
      >
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
            Delete {desc}
          </button>
        )}
      </PopoverPanel>
    </Popover>
  );
};
