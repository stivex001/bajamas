import AiAssitance from "@/components/emailCampaign/AiAssitance";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import CustomEditor from "@/components/shared/CustomEditor";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlainText = () => {
  const navigate = useNavigate();
  const { campaignData, setCampaignData } = useCampaignStore();

  // Manage editor content state
  const [editorContent, setEditorContent] = useState(
    campaignData?.design_content || ""
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCampaignData({
      ...campaignData,
      design_content: editorContent,
    });
    navigate(`/email_campaign/add_tag`);
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Plain Text" />
      <CardLayout className="lg:p-5">
        <form>
          <div className="flex items-center gap-3 justify-end mb-0.5">
            <Dialog>
              <DialogTrigger>
                <CustomButton
                  label="AI Assistance"
                  variant="primary"
                  className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
                  size="lg"
                  type="button"
                />
              </DialogTrigger>
              <AiAssitance />
            </Dialog>

            <CustomButton
              label="Save and continue"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={onSubmit}
            />
          </div>

          <div className="">
            <CustomEditor body={editorContent} onChange={setEditorContent} />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default PlainText;
