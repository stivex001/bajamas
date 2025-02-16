import { EditIcon } from "@/assets/svgs/MenuIcon";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";



export const Preview = () => {
  const { campaignData } = useCampaignStore();

  console.log(campaignData, "cam");

  return (
    <div className="flex-1 flex flex-col gap-7">
      <div className="bg-white border border-[#DDDDDD] shadow-lightshadow px-5 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-base font-medium ">Settings</h1>
          <CustomButton
            label="Edit"
            variant="primary"
            className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
            size="lg"
            type="submit"
            icon={EditIcon}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#555555] text-sm">Email subject</p>
            <h3 className="text-sm text-black">{campaignData?.title}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#555555] text-sm">Email preview text</p>
            <h3 className="text-sm text-black">{campaignData?.content}</h3>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[#555555] text-sm">From name</p>
              <h3 className="text-sm text-black">{campaignData?.from_name}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#555555] text-sm">Sender`s email address</p>
              <h3 className="text-sm text-black">{campaignData?.from_email}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#555555] text-sm">
              Appears on Google Analytics as
            </p>
            <h3 className="text-sm text-black">{campaignData?.title}</h3>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
};
