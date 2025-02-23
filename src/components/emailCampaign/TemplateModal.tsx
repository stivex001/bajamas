import { X } from "lucide-react";
import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { useState } from "react";
import { useTemplates } from "@/api/crud/template";
import { ScreenLoader } from "../shared/ScreenLoader";
import { TemplatesCard } from "./TemplatesCard";

type AddTagModalProps = {
  onClose: any;
  open: boolean;
};

const templateList = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "My templates",
  },
];

export const TemplateModal = ({ open, onClose }: AddTagModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<number | null>(1);
  const { getGeneralTemplatesList, getUserTemplatesList } = useTemplates();

  const { data: generalList, isFetching } = getGeneralTemplatesList();
  const { data: userList, isFetching: userFecthing } = getUserTemplatesList();

  const renderedGeneralList = generalList?.message;
  const renderedUserList = userList?.message;

  const filteredGeneralTemplates = renderedGeneralList?.filter((template) =>
    template?.template_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUserTemplates = renderedUserList?.filter((template) =>
    template?.template_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const displayedTemplates =
    activeTemplate === 1
      ? filteredGeneralTemplates
      : filteredUserTemplates || [];

      

  if (isFetching || userFecthing) return <ScreenLoader />;

  return (
    <div>
      <div className="fixed mx-auto left-[50%] lg:left-[60%] top-[50%] z-[99] grid w-full max-h-screen lg:max-h-[90vh] overflow-y-auto max-w-md lg:max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg border-slate-800 ">
        <div className="p-5 border-b border-[#CCCCCC] flex items-center justify-between">
          <h1 className="text-lg font-bold">Choose a template</h1>
          <div onClick={onClose} className="cursor-pointer">
            <X className="h-5 w-5 font-semibold " />
          </div>
        </div>
        <div className="sticky bg-white top-5 z-[999] px-5 pb-5 flex flex-col lg:flex-row items-center justify-between gap-1">
          <div className="flex items-center flex-wrap gap-2.5">
            {templateList?.map((temp) => (
              <button
                onClick={() => setActiveTemplate(temp.id)}
                key={temp?.id}
                className={`${
                  activeTemplate === temp.id
                    ? "bg-primary text-white"
                    : "bg-[#E6F2E6]  text-primary"
                } text-sm rounded-[16px] px-2.5 py-1.5 capitalize`}
              >
                {temp.name}
              </button>
            ))}
          </div>
          <div className="w-10/12 lg:w-[300px] mx-auto lg:mx-0 border-2 border-[#D5D5D5] rounded-[3px] px-2 py-3 flex items-center gap-3">
            <SearchIcon />
            <input
              className="text-xs w-full outline-none bg-transparent"
              type="text"
              placeholder="Find template by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className=" p-5">
          {displayedTemplates && displayedTemplates?.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {displayedTemplates?.map((template) => (
                <TemplatesCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No templates found.</p>
          )}
        </div>
      </div>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 w-full min-h-screen z-50 bg-[#64646430]/70"
        />
      )}
    </div>
  );
};
