import useCKEditor from "@/hooks/useCKEditor";
import React, { useState } from "react";

interface CustomEditorProps {
  body?: string;
  onChange?: (data: string) => void;
}

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

const CustomEditor: React.FC<CustomEditorProps> = ({ body = "", onChange }) => {
  const { CKEditor, Editor, isEditorLoaded } = useCKEditor();
  const [content, setContent] = useState(body);

  if (!isEditorLoaded) return <p>Loading editor...</p>;

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={content}
      onChange={(_: any, editor: any) => {
        const data = editor.getData();
        setContent(data);
        onChange?.(data);
      }}
    
    />
  );
};

export default CustomEditor;
