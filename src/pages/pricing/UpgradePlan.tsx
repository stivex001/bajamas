import { MasterCardIcon, VisaCardIcon } from "@/assets/svgs/CardIcon";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useState } from "react";

interface Plan {
  title: string;
  price: string;
  cat: string;
  features: string[];
}

const tabs = [
  {
    id: 1,
    label: "Monthly",
  },
  {
    id: 2,
    label: "Yearly",
  },
];

const plans = {
  Monthly: [
    {
      title: "Free",
      price: "$0",
      features: [
        "500 subscribers",
        "10,000 monthly email sends",
        "Everything in Free",
      ],
      cat: "Monthly Charge",
    },
    {
      title: "Standard",
      price: "$15.83",
      features: [
        "2,500 subscribers",
        "30,000 monthly email sends",
        "No Sender branding in emails and forms",
        "SMS messaging",
        "Multi-user access",
      ],
      cat: "Monthly Charge",
    },
    {
      title: "Professional",
      price: "$29.17",
      features: [
        "2,500 subscribers",
        "60,000 monthly email sends",
        "Free SMS included (worth $35/mo.)",
        "Advanced automation",
        "Animated countdown timers",
        "Priority support",
      ],
      cat: "Monthly Charge",
    },
  ],
  Yearly: [
    {
      title: "Free",
      price: "$0",
      features: [
        "500 subscribers",
        "10,000 monthly email sends",
        "Everything in Free",
      ],
      cat: "Yearly Charge",
    },
    {
      title: "Standard",
      price: "$150",
      features: [
        "2,500 subscribers",
        "30,000 monthly email sends",
        "No Sender branding in emails and forms",
        "SMS messaging",
        "Multi-user access",
      ],
      cat: "Yearly Charge",
    },
    {
      title: "Professional",
      price: "$290",
      features: [
        "2,500 subscribers",
        "60,000 monthly email sends",
        "Free SMS included (worth $35/mo.)",
        "Advanced automation",
        "Animated countdown timers",
        "Priority support",
      ],
      cat: "Yearly Charge",
    },
  ],
};

const UpgradePlan = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activePlans = activeTab === 1 ? plans.Monthly : plans.Yearly;

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Pricing" />
      <CardLayout className="">
        <div className="w-[232px] mx-auto flex items-center py-2.5 px-4 rounded-[5px] shadow-boxShadow">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`w-[85px] h-[34px] px-5 py-1.5 flex items-center justify-center cursor-pointer  font-semibold text-base font-Nunito ${
                activeTab === tab.id
                  ? "text-white bg-primary rounded-[9px]"
                  : "text-[#979797] rounded-[1px]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-5">
          {activePlans?.map((plan: Plan, index: number) => (
            <div
              key={index}
              className="bg-pricebg bg-cover bg-no-repeat py-10 px-6 shadow-priceshadow  text-center flex flex-col justify-between items-center"
            >
              <div className="border-b-2 border-b-[#212121]/10 pb-10 w-full">
                <h3 className="text-xl font-bold text-[#202224] mb-2.5 font-Nunito">
                  {plan?.title}
                </h3>
                <h2 className="text-base mb-2.5 font-Nunito">{plan?.cat}</h2>
                <p className="text-5xl font-extrabold text-primary mb-4">
                  {plan.price}
                </p>
              </div>
              <ul className="mt-10 w-full border-b-2 border-b-[#212121]/10 pb-10 h-[400px]">
                {plan?.features?.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="mb-7 text-lg text-[#212121] font-Nunito"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              {plan?.title !== "Free" ? (
                <button className="mt-10 border-2 border-primary rounded-[30px] text-primary text-base font-bold font-Nunito py-5 px-7">
                  Choose this plan
                </button>
              ) : (
                <button className="mt-10  rounded-[30px] text-primary text-base font-bold font-Nunito py-5 px-7"></button>
              )}
            </div>
          ))}
        </div>

        <div className="lg:w-[78%] mx-auto mt-14 py-2 px-7 shadow-priceshadow flex flex-col gap-3">
          <h2 className="text-base font-Nunito font-bold">Order Summary</h2>
          <p className="text-base font-Nunito">
            You will be Charged $350.00 your plan will be valid until
            2025-09-20, after that it will automatically renew
          </p>
          <div className="flex items-center justify-between">
            <p className="text-base font-Nunito font-bold">Due total</p>
            <p className="text-base font-Nunito font-bold">$350.00</p>
          </div>
          <CustomButton
            label="Purchase"
            variant="primary"
            className="w-full h-12 rounded-[4px] p-2 text-xs font-medium"
            size="lg"
            type="button"
          />
          <div className="flex items-center gap-4">
            <MasterCardIcon />
            <VisaCardIcon />
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default UpgradePlan;
