import { CloudIcon, ListIcon, PlugIcon } from "@/assets/svgs/Icons";
import { UploadSubscribers } from "@/components/list/UploadSubscribers";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import Section from "@/components/shared/Section";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    icon: <CloudIcon />,
    label: "Import from a file",
    content: <UploadSubscribers />,
  },
  {
    id: 2,
    icon: <ListIcon />,
    label: "Copy/Paste subscriber list",
    content: <p>Content for Import from a file</p>,
  },
  {
    id: 3,
    icon: <PlugIcon />,
    label: "Via API",
    content: <p>Content for Import from a file</p>,
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
        <div className="mt-16">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </CardLayout>
    </Section>
  );
};

export default NewSubscriber;
