import Preview from "@/assets/images/Container.png";

export const MessagePreview = () => {
  return (
    <div>
      <h1 className="text-base font-medium mb-6">Details</h1>
      <div className=" flex items-center justify-center">
        <img src={Preview} alt="preview" />
      </div>
    </div>
  );
};
