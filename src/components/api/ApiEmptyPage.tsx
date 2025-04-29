import nodata from "@/assets/images/empty.png";
import CustomButton from "@/components/shared/CustomButton";
import { Dialog } from "@/components/ui/dialog";
import { CreateApiModal } from "@/components/api/CreateApiModal";

type Props = {
  open?: boolean;
  onClose?: (open: boolean) => void;
};

const ApiEmptyPage = ({ open = false, onClose }: Props) => {
  const handleOpenChange = (isOpen: boolean) => {
    if (onClose) onClose(isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-5">
        <img
          src={nodata}
          alt="No Data Found"
          className="w-[381px] h-[381px] object-cover"
        />
        <h1 className="font-bold text-xl text-center lg:text-3xl">
          No tokens created
        </h1>
        <div className="flex items-center justify-center gap-3">
          <CustomButton
            label="Create API tokens"
            variant="primary"
            className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium"
            size="lg"
            type="button"
            onClick={() => handleOpenChange(true)} // manually trigger open
          />

          <CustomButton
            label="View API docs"
            variant="primary"
            className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium bg-[#122112]"
            size="lg"
            type="button"
          />
        </div>

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <CreateApiModal onClose={() => handleOpenChange(false)} />
        </Dialog>
      </div>
    </div>
  );
};

export default ApiEmptyPage;
