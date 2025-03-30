import { EditIcon } from "@/assets/svgs/MenuIcon";
import CustomButton from "../shared/CustomButton";
import { useNavigate } from "react-router-dom";
import { useCampaignStore } from "@/store/useCampaignStore";

export const Design = () => {
  const navigate = useNavigate();
  const { campaignData } = useCampaignStore();
  
    console.log(campaignData, "cam");

  return (
    <div className="flex-1 bg-white border border-[#DDDDDD] shadow-lightshadow px-5 py-6">
      <div className="flex items-center justify-between px-5 mb-7">
        <h1 className="text-base font-medium ">Design</h1>
        <CustomButton
          label="Edit"
          variant="primary"
          className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
          size="lg"
          type="button"
          icon={EditIcon}
          onClick={() => navigate("/email_campaign/edit_template")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-[#DDDDDD] h-fit">
        {campaignData.design_html ? (
            <div
              dangerouslySetInnerHTML={{ __html: campaignData.design_html }}
              className="w-full h-full overflow-auto bg-white p-3"
            />
          ) : (
            <p className="text-gray-500 text-center">No design available</p>
          )}
        </div>
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CustomButton
              label="Preview"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
              size="lg"
              type="button"
            />
            <CustomButton
              label="View plain text version"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
              size="lg"
              type="button"
            />
          </div>
          <CustomButton
            label="Send test email"
            variant="primary"
            className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
            size="lg"
            type="button"
          />
        </div> */}
      </div>
    </div>
  );
};
