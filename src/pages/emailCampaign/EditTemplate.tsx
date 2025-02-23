import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import { useRef } from "react";
import EmailEditor from "react-email-editor";

const EditTemplate = () => {
  const emailEditorRef = useRef<any>(null);

  const onLoad = () => {
    console.log("Email editor loaded");
  };

  const onReady = () => {
    if (emailEditorRef.current) {
      emailEditorRef?.current?.loadDesign({
        body: {
          rows: [
            {
              columns: [
                {
                  contents: [
                    {
                      type: "text",
                      values: { text: "<h1>Welcome to My Email</h1>" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      });
    }
  };

  const exportHtml = () => {
    if (emailEditorRef.current) {
      emailEditorRef.current.exportHtml((data: any) => {
        const { design, html } = data;
        console.log("Exported Design:", design);
        console.log("Exported HTML:", html);
      });
    }
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Plain Text " />
      <button
        onClick={exportHtml}
        className=" bg-primary text-white py-2 px-4 rounded self-end"
      >
        Export HTML
      </button>
      <CardLayout>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </CardLayout>
    </main>
  );
};

export default EditTemplate;
