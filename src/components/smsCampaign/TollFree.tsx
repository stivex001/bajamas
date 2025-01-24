import englishFlag from "@/assets/images/en.png";
import frenchFlag from "@/assets/images/fr.png";
import spanishFlag from "@/assets/images/es.png";

const tollFreeNumbers = [
  { country: "USA", flag: englishFlag, number: "+1833-809-0354" },
  { country: "France", flag: frenchFlag, number: "+1833-809-0354" },
  { country: "Brazil", flag: spanishFlag, number: "+1833-809-0354" },
  { country: "Nigeria", flag: spanishFlag, number: "+1833-809-0354" },
  { country: "EU", flag: spanishFlag, number: "+1833-809-0354" },
];

export const TollFree = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-semibold text-lg text-[#797275] ">
        Choose Country Number to purchase
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-4">
        {tollFreeNumbers.map((toll, index) => (
          <div
            key={index}
            className="w-[150px] border border-[#CDCDCD] py-5 px-1.5 flex items-end justify-center rounded-[3px] cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <img
                className="h-[13px] w-[18px]"
                src={toll?.flag}
                alt={toll?.country}
              />

              <p className="text-xs font-semibold text-[#7B797D] ">
                {toll?.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
