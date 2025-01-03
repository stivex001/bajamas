import csv from "@/assets/images/csv.png";
import CustomButton from "../shared/CustomButton";
const ImportViaCSV = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="w-full lg:w-[361px] h-[163px] ">
          <img src={csv} alt="csv" className="w-full h-full" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#6C6E72]">
            Import subscribers via CSV
          </p>
          <span className="text-[8px] lg:text-xs font-semibold text-[#ABA6AB]">
            Capture subscribers and colect the data you need to grow your
            gudience
          </span>
        </div>
      </div>
      <CustomButton
        label="Import"
        variant="primary"
        className="w-full lg:w-[109px] h-[32px] rounded-md text-[10px] text-black font-semibold bg-[#CEE4CE] mt-2.5 lg:mt-0"
        size="lg"
        type="submit"
        // disabled={!isValid}
      />
    </div>
  );
};

export default ImportViaCSV;
