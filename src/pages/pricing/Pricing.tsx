import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";

const Pricing = () => {
  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Pricing" />
      <CardLayout className="">
        <h1 className="font-medium text-[#1F1F1F] text-2xl">
          Account Settings
        </h1>
        <div className="border border-[#EDEDED] p-4 rounded-lg flex flex-col gap-2 my-6">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-[#1F1F1F]">Plan: Professional</p>
            <span className="text-sm text-[#8A8A8A]">
              Take your videos to the next level with more features.
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary text-xl">$9.99 / month</p>
            <CustomButton
              label="Upgrade Plan"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              // onClick={() => navigate("/list/subscribers/new-subscriber")}
            />
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default Pricing;
