import { ImportIcon } from "@/assets/svgs/Icons";

import example from "@/assets/images/example.png"

export const UploadSubscribers = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[18px] ">
      <div className="flex-1 rounded-[14px] shadow-lg py-8 px-4 lg:px-12">
        <h1 className="text-[#79B078] text-2xl mb-2 ">
          Upload subscribers from file
        </h1>
        <p className="text-base text-[#83848F]">
          Choose file from your computer. You can add custom fields to first
          row.
        </p>
        <div className="border  border-dashed border-primary flex items-center justify-center mt-3">
          <div className="pt-[51px] pb-6 max-w-[315px] mx-auto flex flex-col gap-7">
            <p className="text-xs text-[#83848F] px-6 lg:px-0 leading-[21px]">
              Drag and drop file or choose from your computer
            </p>
            <button className="bg-primary w-fit mx-auto rounded-[5px] flex items-center py-1 px-6 gap-3 h-8">
              <ImportIcon />
              <p className="text-sm font-medium text-white">Import</p>
            </button>
            <p className="text-xs text-[#83848F] mx-auto leading-[21px]">
              Supported file types: .csv, .txt, MS Excel <br /> (.xlsx)Maximum
              allowed file size is 64MB
            </p>
          </div>
        </div>
        <div className="flex flex-end justify-end mt-10 ">
          <div className="flex items-center gap-2">
            <button className="bg-white w-fit h-8 rounded-[5px] text-[#79B078] text-base font-medium px-6 gap-3">
              Cancel
            </button>
            <button className="bg-primary w-fit h-[44px] rounded-[10px] flex items-center py-1 px-6 gap-3 text-white">
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-[14px] shadow-lg py-8 px-4 lg:px-12">
        <h1 className="text-[#437742] text-2xl mb-2 ">List example</h1>
        <p className="text-base text-[#83848F]">
          Each subscriber must be in a new row, subscriber fields must be in
          separate columns
        </p>
        <div className="mt-3">
            <img src={example} alt="example" />
        </div>
      </div>
    </div>
  );
};
