import { useTemplates } from "@/api/crud/template";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AiAssitance from "@/components/emailCampaign/AiAssitance";
import { toast } from "sonner";

const CreateTemplate = () => {
  const navigate = useNavigate();
  const emailEditorRef = useRef<any>(null);
  const [showSavedButton, setShowSaveButton] = useState(false);

  const { getGeneralTemplatesList, createTemplate } =
    useTemplates();

  const { refetch } = getGeneralTemplatesList();
//   const { data: userList } = getUserTemplatesList();

  const { mutate, isPending } = createTemplate;

  //   const renderedGeneralList = generalList?.message;
//   const renderedUserList = userList?.message;

  //   const loadSelectedTemplate = () => {
  //     const templateId = tempData?.template_id;
  //     if (!templateId || !emailEditorRef.current?.editor) return;

  //     // Find the matching template
  //     const selectedTemplate =
  //       renderedGeneralList?.find((t) => t.id === templateId) ||
  //       renderedUserList?.find((t) => t.id === templateId);

  //     if (selectedTemplate?.design_content) {
  //       emailEditorRef.current?.editor?.loadDesign(
  //         JSON.parse(selectedTemplate.design_content)
  //       );
  //     }
  //   };

  const onLoad = () => {
    console.log("Email editor loaded");
  };

  const onReady = () => {
    setShowSaveButton(true);
    // loadSelectedTemplate();
  };

  const exportHtml = async () => {
    if (emailEditorRef?.current?.editor) {
      emailEditorRef?.current?.editor?.exportHtml(async (data: any) => {
        const { design, html } = data;

        const formData = new FormData();
        formData.append("template_name", "General Template");
        formData.append("template_describ", "This is the Sysyeem Template");
        formData.append("design_content", JSON.stringify(design));
        formData.append("design_html", html);
        formData.append("template_type", "public");

        try {
          await mutate(formData, {
            onSuccess: (res: any) => {
              console.log(res);
              if (res?.status === true) {
                toast.success(res?.message);
                refetch();
                navigate(`/templates`);
              } else {
                toast.error(res?.message);
              }
            },
          });
        } catch (error) {}
      });
    }
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Create Templates" />
      <CardLayout>
        <div className="flex items-center gap-3 justify-end mb-0.5">
          <Dialog>
            <DialogTrigger>
              <CustomButton
                label=" AI Assistance"
                variant="primary"
                className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
                size="lg"
                type="button"
              />
            </DialogTrigger>
            <AiAssitance />
          </Dialog>

          {showSavedButton && (
            <CustomButton
              label="Save and continue"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={exportHtml}
              isLoading={isPending}
            />
          )}
        </div>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </CardLayout>
    </main>
  );
};

export default CreateTemplate;
