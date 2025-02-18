import { ContentsPreview } from "./ContentsPreview";
import { SubcriberContents } from "./SubcriberContents";

export const Preview = () => {
  return (
    <div className="flex-1 flex flex-col gap-7">
      <ContentsPreview />
      <SubcriberContents />
    </div>
  );
};
