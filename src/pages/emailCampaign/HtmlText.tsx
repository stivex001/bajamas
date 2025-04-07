import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

const HtmlText = () => {
  const navigate = useNavigate();
  const { campaignData, setCampaignData } = useCampaignStore();

  const [editorContent, setEditorContent] = useState(
    campaignData?.design_content || "<p>Edit your email HTML here</p>"
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
        <form className="flex flex-col gap-5">
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
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Editor */}
            <div className="w-full lg:w-7/12 h-[500px]">
              <Editor
                height="100%"
                defaultLanguage="html"
                value={editorContent}
                onChange={(value) => setEditorContent(value || "")}
                theme="vs-dark"
              />
            </div>
            {/* Live Preview */}
            <div className="w-full lg:w-5/12 h-[500px] border rounded overflow-hidden">
              <iframe
                srcDoc={editorContent}
                title="Live Preview"
                className="w-full h-full"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default HtmlText;
