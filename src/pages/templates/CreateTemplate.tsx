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
import ControlledInput from "@/components/shared/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomControlledSelect from "@/components/shared/CustomControlledSelect";
import { Label } from "@/components/ui/label";

const fields: Field[] = [
  {
    name: "template_name",
    type: "text",
    isRequired: true,
  },
  {
    name: "template_describ",
    type: "text",
    isRequired: true,
  },

  {
    name: "template_type",
    type: "text",
    errorMessage: "Select A Type",
    // isRequired: true,
  },
];

const typeList = [
  {
    label: "Public",
    value: "public",
  },
  {
    label: "Private",
    value: "private",
  },
];

const CreateTemplate = () => {
  const navigate = useNavigate();
  const emailEditorRef = useRef<any>(null);
  const [showSavedButton, setShowSaveButton] = useState(false);

  const { control, handleSubmit, formState } = useDynamicForm(fields, {});

  const { errors } = formState;

  const { getGeneralTemplatesList, createTemplate } = useTemplates();

  const { refetch } = getGeneralTemplatesList();
  //   const { data: userList } = getUserTemplatesList();

  const { mutate, isPending } = createTemplate;

  const onLoad = () => {
    console.log("Email editor loaded");
  };

  const onReady = () => {
    setShowSaveButton(true);
    // loadSelectedTemplate();
  };

  const exportHtml = async (formValues: any) => {
    if (emailEditorRef?.current?.editor) {
      emailEditorRef?.current?.editor?.exportHtml(async (editorData: any) => {
        const { design, html } = editorData;
        if (!design || !html) {
          toast.error("Please design your template before saving.");
          return;
        }
        const formData = new FormData();
        formData.append("template_name", formValues.template_name);
        formData.append("template_describ", formValues.template_describ);
        formData.append("design_content", JSON.stringify(design));
        formData.append("design_html", html);
        formData.append("template_type", formValues.template_type);

        try {
          await mutate(formData, {
            onSuccess: (res: any) => {
              if (res?.status === true) {
                toast.success(res?.message);
                refetch();
                navigate(`/templates`);
              } else {
                toast.error(res?.message);
              }
            },
          });
        } catch (error) {
          console.error("Template creation failed:", error);
          toast.error("Something went wrong while saving the template.");
        }
      });
    }
  };

  console.log(errors, "errors");

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Create Templates" />
      <CardLayout>
        <form onSubmit={handleSubmit(exportHtml)}>
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
                type="submit"
                isLoading={isPending}
                // disabled={errors}
              />
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-[100px] gap-y-7 mb-7">
            <ControlledInput
              name="template_name"
              control={control}
              placeholder="Enter template name"
              type="text"
              label="Template Name"
              variant="primary"
              rules={{ required: true }}
            />
            <ControlledInput
              name="template_describ"
              control={control}
              placeholder="Enter description"
              type="text"
              label="Template Description"
              variant="primary"
              rules={{ required: true }}
            />

            <CustomControlledSelect
              name="template_type"
              control={control}
              label="Template Type"
              placeholder="Select Template Type"
              options={typeList}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label className={`text-base font-medium capitalize text-boxgray`}>
              Template Editor
            </Label>
            <EmailEditor
              ref={emailEditorRef}
              onLoad={onLoad}
              onReady={onReady}
            />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default CreateTemplate;
