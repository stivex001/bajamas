import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

type ThumbnailRendererProps = {
  htmlContent: string;
};

const ThumbnailRenderer = ({ htmlContent }: ThumbnailRendererProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        html2canvas(iframe.contentDocument?.body as HTMLElement).then(
          (canvas) => {
            const img = canvas.toDataURL("image/png");
            setThumbnail(img);
          }
        );
      };

      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(htmlContent);
        doc.close();
      }
    }
  }, [htmlContent]);

  if (thumbnail) {
    return <img src={thumbnail} alt="thumbnail" className="w-5 h-5" />;
  }

  return (
    <iframe
      ref={iframeRef}
      style={{ display: "none" }}
      sandbox="allow-same-origin"
      title="thumbnail"
    />
  );
};

export default ThumbnailRenderer;
