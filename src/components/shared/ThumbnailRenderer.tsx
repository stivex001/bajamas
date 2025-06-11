import { useEffect, useRef, useState } from "react";
import domtoimage from "dom-to-image-more";

type ThumbnailRendererProps = {
  htmlContent: string;
};

const ThumbnailRenderer = ({ htmlContent }: ThumbnailRendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Write the HTML content to the container
    container.innerHTML = htmlContent;

    // Wait a bit for layout/rendering
    setTimeout(() => {
      domtoimage
        .toPng(container)
        .then((dataUrl: string) => {
          setThumbnail(dataUrl);
        })
        .catch((err: any) => {
          console.error("dom-to-image failed", err);
        });
    }, 300); // Adjust timing if needed
  }, [htmlContent]);

  return (
    <>
      {thumbnail ? (
        <img src={thumbnail} alt="thumbnail" className="w-32 h-auto" />
      ) : (
        <span>Generating thumbnail...</span>
      )}

      {/* Rendered off-screen */}
      <div
        ref={containerRef}
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
      />
    </>
  );
};

export default ThumbnailRenderer;
