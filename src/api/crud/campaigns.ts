import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface CampaignData {
  tag_id: ID;
  title: string;
  reply_to: string;
  status: number;
  schedule_date: Date;
  content_type: string;
  content: string;
  subject: string;
  from_name: string;
  from_email: string;
}

export interface Campaign {
  message: CampaignData[];
}

export const useCampaign = () => {
  const createCampaign = useApiMutation<AuthResponse, FormData>({
    url: "/createcampaigns",
    method: "POST",
  });

  const getCampaignList = () =>
    useApiQuery<Campaign>(["group-list"], {
      url: `/viewcamps`,
      method: "GET",
    });

  return {
    createCampaign,
    getCampaignList,
  };
};
