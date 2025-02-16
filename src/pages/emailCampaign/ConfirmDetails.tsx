import { useCampaignStore } from "@/store/useCampaignStore";

const ConfirmDetails = () => {
  const { campaignData } = useCampaignStore();

  console.log(campaignData, "cam");

  return <div>ConfirmDetails</div>;
};

export default ConfirmDetails;
