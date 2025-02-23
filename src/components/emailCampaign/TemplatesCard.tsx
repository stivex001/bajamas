import { TemplateList } from "@/api/crud/template";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useNavigate } from "react-router-dom";

type Props = {
  template: TemplateList;
};

export const TemplatesCard = ({ template }: Props) => {
  const navigate = useNavigate();
  const { setCampaignData } = useCampaignStore();

  const handleTemplateHandler = () => {
    setCampaignData({ template_id: template.id }); // Add template_id to campaignData
    navigate(`/email_campaign/add_tag`);
  };

  return (
    <button
      onClick={handleTemplateHandler}
      className="w-full bg-white shadow-lightshadow p-2 h-[300px] border flex flex-col"
    >
      <div className="flex-grow border"></div>
      <h1 className="text-sm font-semibold text-center py-3">
        {template?.template_describ}
      </h1>
    </button>
  );
};
