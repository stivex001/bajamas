import { ID } from "@/api/hooks/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CampaignData = {
  title?: string;
  from_email?: string;
  from_name?: string;
  content?: string;
  template_id?: ID;
  design_content?: string;
  design_html?: string;
  content_type?:any;
  group?: any;
  reply_to?: string;
  schedule_date?: any;
  status?: number;
};

type CampaignStore = {
  campaignData: CampaignData;
  setCampaignData: (newData: CampaignData) => void;
};

export const useCampaignStore = create<CampaignStore>()(
  persist(
    (set) => ({
      campaignData: {}, // Initial state
      setCampaignData: (newData) =>
        set((state) => ({
          campaignData: { ...state.campaignData, ...newData },
        })),
    }),
    {
      name: "campaign-storage", 
    }
  )
);
