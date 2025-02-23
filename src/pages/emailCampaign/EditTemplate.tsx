import { useTemplates } from "@/api/crud/template";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { useNavigate } from "react-router-dom";

const EditTemplate = () => {
  const navigate = useNavigate();
  const { setCampaignData, campaignData } = useCampaignStore();
  const emailEditorRef = useRef<any>(null);
  const [showSavedButton, setShowSaveButton] = useState(false);

  const { getGeneralTemplatesList, getUserTemplatesList } = useTemplates();

  console.log(campaignData, "camp");

  const { data: generalList } = getGeneralTemplatesList();
  const { data: userList } = getUserTemplatesList();

  const renderedGeneralList = generalList?.message;
  const renderedUserList = userList?.message;

  const loadSelectedTemplate = () => {
    const templateId = campaignData?.template_id;
    if (!templateId || !emailEditorRef.current?.editor) return;

    // Find the matching template
    const selectedTemplate =
      renderedGeneralList?.find((t) => t.id === templateId) ||
      renderedUserList?.find((t) => t.id === templateId);

    if (selectedTemplate?.design_content) {
      emailEditorRef.current?.editor?.loadDesign(
        JSON.parse(selectedTemplate.design_content)
      );
    }
  };

  const onLoad = () => {
    console.log("Email editor loaded");
  };

  const onReady = () => {
    setShowSaveButton(true);
    loadSelectedTemplate();
  };

  const exportHtml = () => {
    if (emailEditorRef?.current?.editor) {
      emailEditorRef?.current?.editor?.exportHtml((data: any) => {
        const { design, html } = data;
        setCampaignData({
          design_content: JSON.stringify(design),
          design_html: html,
        });
        console.log("Exported Design:", design);
        console.log("Exported HTML:", html);
        navigate(`/email_campaign/add_tag`);
      });
    }
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Plain Text " />

      <CardLayout>
        <div className="flex items-center gap-3 justify-end mb-0.5">
          <CustomButton
            label=" AI Assistance"
            variant="primary"
            className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
            size="lg"
            type="button"
          />
          {showSavedButton && (
            <CustomButton
              label="Save and continue"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={exportHtml}
            />
          )}
        </div>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </CardLayout>
    </main>
  );
};

export default EditTemplate;
