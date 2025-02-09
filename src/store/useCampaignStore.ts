import { create } from "zustand";

type CampaignData = {
  title?: string;
  from_email?: string;
  from_name?: string;
  content?: string;
};

type CampaignStore = {
  campaignData: CampaignData;
  setCampaignData: (newData: CampaignData) => void;
};

export const useCampaignStore = create<CampaignStore>((set) => ({
  campaignData: {},
  setCampaignData: (newData) =>
    set((state) => ({ campaignData: { ...state.campaignData, ...newData } })),
}));
