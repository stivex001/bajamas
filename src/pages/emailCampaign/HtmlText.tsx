import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HtmlText = () => {
  const navigate = useNavigate();
  const { campaignData, setCampaignData } = useCampaignStore();

  // Manage editor content state
  const [editorContent] = useState(
    campaignData?.design_content || ""
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCampaignData({
      ...campaignData,
      design_content: editorContent,
      design_html: editorContent,
    });
    navigate(`/email_campaign/add_tag`);
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Custom HTML" />
      <CardLayout className="lg:p-5">
        <form>
          <div className="flex items-center gap-3 justify-end mb-0.5">
            <CustomButton
              label="Save and continue"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={onSubmit}
            />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default HtmlText;
