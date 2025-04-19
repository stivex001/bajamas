import { ImportIcon } from "@/assets/svgs/Icons";

// import example from "@/assets/images/example.png";
import { SubscriberData, useSubscribers } from "@/api/crud/subscribers";
import { useRef, useState } from "react";
import Papa from "papaparse";
import { PreviewUploadedSucribers } from "./PreviewUploadedSucribers";
import { toast } from "sonner";
import CustomControlledSelect from "../shared/CustomControlledSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { groups } from "@/api/crud/groups";
import { useNavigate } from "react-router-dom";

const fields: Field[] = [
  {
    name: "tag",
    type: "text",
    errorMessage: "Select A Group",
    isRequired: true,
  },
];

export const UploadSubscribers = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<string[][]>([]); // CSV preview
  const [searchTerm, setSearchTerm] = useState("");

  const { control, handleSubmit } = useDynamicForm<SubscriberData>(fields, {});
  const { getGroupList } = groups();
  const { importBulkSubscribers, getSubscriberList } = useSubscribers();

  const { data: list } = getGroupList();
  const { refetch } = getSubscriberList();
  const { mutate, isPending } = importBulkSubscribers;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);

      Papa.parse(file, {
        complete: (result) => {
          setPreviewData(result.data as string[][]);
        },
      });
    }
  };

  const groupList = list?.message;
  const tagList = Array.isArray(groupList)
    ? groupList?.map((tag: any) => ({
        value: `${tag?.id}`,
        label: tag?.name,
      }))
    : [];

  const handleUpload = (data: any) => {
    if (!csvFile) {
      toast.error("No CSV file selected.");
      return;
    }

    console.log("Formdatavalues", data);

    const formData = new FormData();

    const tagId = typeof data?.tag === "object" ? data.tag.value : data.tag;
    if (!tagId) {
      toast.error("Please select a group before uploading.");
      return;
    }

    formData.append("tag_id", tagId);
    formData.append("csv_file", csvFile);

    mutate(formData, {
      onSuccess: (response: any) => {
        console.log(response);

        setCsvFile(null);
        setPreviewData([]);
        toast.success("Upload successful");
        refetch();
        navigate("/list/subscribers");
      },
      onError: (err) => {
        console.error(err, "errr_");
        toast.error(err?.message);
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[18px] ">
      <form
        onSubmit={handleSubmit(handleUpload)}
        className="flex-1 rounded-[14px] shadow-lg py-8 px-4 lg:px-12"
      >
        <h1 className="text-[#79B078] text-2xl mb-2 ">
          Upload subscribers from file
        </h1>
        <p className="text-base text-[#83848F]">
          Choose file from your computer. You can add custom fields to first
          row.
        </p>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border  border-dashed border-primary flex items-center justify-center mt-3"
        >
          <div className="pt-[51px] pb-6 max-w-[315px] mx-auto flex flex-col gap-7">
            <p className="text-xs text-[#83848F] px-6 lg:px-0 leading-[21px]">
              Drag and drop file or choose from your computer
            </p>
            <button
              type="button"
              className="bg-primary w-fit mx-auto rounded-[5px] flex items-center py-1 px-6 gap-3 h-8"
            >
              <ImportIcon />
              <p className="text-sm font-medium text-white">Import</p>
            </button>
            <p className="text-xs text-[#83848F] mx-auto leading-[21px]">
              Supported file types: .csv, .txt, MS Excel <br /> (.xlsx)Maximum
              allowed file size is 64MB
            </p>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            accept=".csv"
            onChange={handleFileSelect}
            hidden
          />
        </div>
        <div className="mt-5">
          <CustomControlledSelect
            name="tag"
            control={control}
            label="Group"
            placeholder="Select Your Group"
            options={tagList}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        <div className="flex flex-end justify-end mt-10 ">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-white w-fit h-8 rounded-[5px] text-[#79B078] text-base font-medium px-6 gap-3"
              onClick={() => {
                setCsvFile(null);
                setPreviewData([]);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary w-fit h-[44px] rounded-[10px] flex items-center py-1 px-6 gap-3 text-white disabled:opacity-50"
              disabled={!csvFile || isPending}
            >
              {isPending ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </form>

      <PreviewUploadedSucribers previewData={previewData} />
    </div>
  );
};
