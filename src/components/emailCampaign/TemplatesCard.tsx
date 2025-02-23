import { TemplateList } from "@/api/crud/template";

type Props = {
  template: TemplateList;
};

export const TemplatesCard = ({template}: Props) => {
  return (
    <button className="w-full bg-white shadow-lightshadow p-2 h-[300px] border flex flex-col">
      <div className="flex-grow border"></div>
      <h1 className="text-sm font-semibold text-center py-3">
        {template?.template_describ}
      </h1>
    </button>
  );
};
