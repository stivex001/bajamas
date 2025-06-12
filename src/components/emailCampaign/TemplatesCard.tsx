import { TemplateList } from "@/api/crud/template";
import { useCampaignStore } from "@/store/useCampaignStore";
import { getContentPreview } from "@/utils/renderContentPreview";
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

  const preview = getContentPreview(template?.design_html || "");

  return (
    <button
      onClick={handleTemplateHandler}
      className="w-full bg-white shadow-lightshadow p-2  border flex flex-col"
    >
      <div className="flex-grow min-h-[300px]">
        {preview.type === "image" ? (
          <img
            src={preview.value}
            alt="thumbnail"
            className="w-full object-cover rounded"
          />
        ) : (
          <div className="">No Design for this template</div>
        )}
      </div>
      <h1 className="text-sm font-semibold text-center py-3">
        {template?.template_describ}
      </h1>
    </button>
  );
};
