import { ReportIcon } from "@/assets/svgs/MenuIcon";
import { CardLayout } from "../shared/CardLayout";
import camp from "@/assets/images/camp.png";

export const CreateEmailCampaign = () => {
  return (
    <CardLayout>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-sm text-[#6D6A6D] pb-5 border-b border-b-[#E4E4E4] ">
          Last sent Email campaign
        </h2>
        <div className="py-5">
          <button className="w-fit bg-[#E6F2E6] text-sm p-3 rounded-lg">
            Create New Email Campaign
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-[53px] h-[53px]">
              <img src={camp} alt="camp" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="font-semibold text-xs text-[#7D7E81]">
                Mega Steez Challenge
              </h2>
              <span className="text-[#7FC494] bg-[#DFFFEA] px-2.5 py-2 text-[10px] font-semibold">
                SENT 2024-09-05 21:45:06
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-0.5">
              <h2 className="font-semibold text-xs text-[#504D4E]">2084</h2>
              <p className="text-[10px] font-semibold text-[#ADADAD]">
                delivered
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="font-semibold text-xs text-[#1FCD2A]">67</h2>
              <p className="text-[10px] font-semibold text-[#A3A0A5]">opened</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="font-semibold text-xs text-[#58B4C9]">0</h2>
              <p className="text-[10px] font-semibold text-[#ADADAD]">clicks</p>
            </div>
            <button className="bg-[#EEEEEE] px-4 py-3 flex items-center justify-center gap-[6px]">
              <ReportIcon />
              <p className="font-semibold text-xs text-[#8E8D8D]">
                View report
              </p>
            </button>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};
