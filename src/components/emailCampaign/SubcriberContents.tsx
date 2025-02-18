import { EditIcon } from "@/assets/svgs/MenuIcon";
import CustomButton from "../shared/CustomButton";

export const SubcriberContents = () => {
  return (
    <div className="bg-white border border-[#DDDDDD] shadow-lightshadow px-5 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium ">Subscribers</h1>
        <CustomButton
          label="Edit"
          variant="primary"
          className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
          size="lg"
          type="submit"
          icon={EditIcon}
        />
      </div>
      <div className="flex flex-col mt-7">
        <div className="flex items-center justify-between">
          <p className="text-[#555555] text-sm">Sending to</p>
          <p className="text-[#555555] text-sm">Subscribers</p>
        </div>
        
      </div>
    </div>
  );
};
