import { EditIcon } from "@/assets/svgs/MenuIcon";
import CustomButton from "../shared/CustomButton";
import { useSubscribers } from "@/api/crud/subscribers";
import { ScreenLoader } from "../shared/ScreenLoader";

export const SubcriberContents = () => {
  const { getSubscriberList } = useSubscribers();

  const { data: list, isPending } = getSubscriberList();

  const groupList = list?.message;

  if (isPending) {
    return <ScreenLoader />;
  }

  return (
    <div className="bg-white border border-[#DDDDDD] shadow-lightshadow py-6">
      <div className="flex items-center justify-between px-5">
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
      <div className="flex flex-col mt-7 px-">
        <div className="flex items-center justify-between border-b border-b-[#DDDDDD] h-7 pb-3 px-5">
          <p className="text-[#555555] text-sm">Sending to</p>
          <p className="text-[#555555] text-sm">Subscribers</p>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <p className="text-[#555555] text-sm">Total subscribers</p>
          <h3 className="text-base font-bold text-black">{groupList?.length}</h3>
        </div>
      </div>
    </div>
  );
};
