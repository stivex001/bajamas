import { CloudIcon, ListIcon, PlugIcon } from "@/assets/svgs/Icons";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import Section from "@/components/shared/Section";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    icon: <CloudIcon />,
    label: "Import from a file",
  },
  {
    id: 2,
    icon: <ListIcon />,
    label: "Copy/Paste subscriber list",
  },
  {
    id: 3,
    icon: <PlugIcon />,
    label: "Via API",
  },
];

const NewSubscriber = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Section>
      <PageTitle title="Create New Subscribers" />
      <CardLayout>
        <div className="flex items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`w-[130px] h-[124px] flex flex-col items-center justify-between py-5 hover:border-primary cursor-pointer  ${
                activeTab === tab.id && "border-2 border-primary rounded-[5px] "
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className=" flex items-center justify-center">
                {tab.icon}
              </div>
              <p
                className={` text-sm text-center max-w-[100px] ${
                  activeTab === tab.id
                    ? "font-bold"
                    : "font-medium text-[#979797]"
                }`}
              >
                {tab.label}
              </p>
            </div>
          ))}
        </div>
      </CardLayout>
    </Section>
  );
};

export default NewSubscriber;
