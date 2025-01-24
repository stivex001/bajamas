import { FC, useState } from "react";
import { TabDetails } from "./TabDetails";
import { TollFree } from "./TollFree";

const tabs = [
  {
    id: 1,
    label: (
      <TabDetails
        title="+18xx"
        details=" Toll free"
        avalability="Available in USA and Canada"
      />
    ),
    content: <TollFree />,
  },
  {
    id: 2,
    label: (
      <TabDetails
        title="ABC"
        details="Alphanumeric"
        avalability="Supported by all Country"
      />
    ),
    content: "gsisuhuid",
  },
];



export const Purchase: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="grid grid-cols-2 gap-7">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex flex-col gap-4 w-full h-[129px] py-2 px-3 cursor-pointer ${
              activeTab === tab.id && "border border-primary"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-6 w-full">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};
