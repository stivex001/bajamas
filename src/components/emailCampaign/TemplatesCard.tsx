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
    setCampaignData({ template_id: template.id });
    navigate(`/email_campaign/edit_template`);
  };

  return (
    <button
      onClick={handleTemplateHandler}
      className="w-full bg-white shadow-lightshadow p-2  border flex flex-col"
    >
      <div className="flex-grow">
        {template?.design_html ? (
          <div
            dangerouslySetInnerHTML={{ __html: template?.design_html }}
            className="w-full h-fit overflow-auto"
          />
        ) : (
          <p className="text-gray-500 text-center">No design available</p>
        )}
      </div>
      <h1 className="text-sm font-semibold text-center py-3">
        {template?.template_describ}
      </h1>
    </button>
  );
};
