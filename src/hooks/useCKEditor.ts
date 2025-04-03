import { useRef, useState, useEffect } from "react";

export default function useCKEditor() {
  const editorRef = useRef<{ CKEditor?: any; Editor?: any }>({});
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    (async () => {
      const { CKEditor } = await import("@ckeditor/ckeditor5-react");
      const Editor = (await import("@ckeditor/ckeditor5-build-classic")).default;

      editorRef.current = { CKEditor, Editor };
      setIsEditorLoaded(true);
    })();
  }, []);

  return Object.freeze({
    isEditorLoaded,
    CKEditor,
    Editor,
  });
}
