import { Label } from "../ui/label";

export const Alphanumeric = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <Label className={`text-xs font-semibold capitalize text-[#908B89]`}>
          Sender ID
        </Label>
        <div className="border border-[#DBDBDB] py-2.5 px-5 flex items-center justify-between">
          <input
            type="text"
            placeholder="5Star Inn C"
            className="w-full border-none outline-none"
          />
          <p className="text-[10px] font-semibold text-[#CCCCCC]">11/11</p>
        </div>
      </div>
      <div className="bg-[#EDEEEE] border border-[#D5D5D5] rounded-[3px] py-4 px-3 flex flex-col gap-2">
        <p className="text-[#898889] text-xs">No multimedia support</p>
        <p className="text-[#898889] text-xs">
          Alphanumeric Sender IDs allow for text only, no MMS or images.
        </p>
        <p className="text-[#898889] text-xs font-semibold">
          No two-way or keywords
        </p>
        <p className="text-[#898889] text-xs">
          Recipients cannot respond to messages from this number type.
        </p>
      </div>
    </div>
  );
};
