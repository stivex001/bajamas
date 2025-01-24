const tollFreeNumbers = [
  { country: "USA", flag: "🇺🇸", number: "+1833-809-0354" },
  { country: "France", flag: "🇫🇷", number: "+1833-809-0354" },
  { country: "Brazil", flag: "🇧🇷", number: "+1833-809-0354" },
  { country: "Nigeria", flag: "🇳🇬", number: "+1833-809-0354" },
  { country: "EU", flag: "🇪🇺", number: "+1833-809-0354" },
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
            className="border border-[#CDCDCD] py-5 px-1.5 flex items-end justify-center rounded-[3px] cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <img
                className="h-[13px] w-[18px]"
                src={`/flags/${toll.flag.toLowerCase()}.png`}
                alt={toll.country}
              />

              <p className="text-xs font-semibold text-[#7B797D] whitespace-nowrap">
                {toll.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
