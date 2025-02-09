import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";

const AddTag = () => {
  const { campaignData } = useCampaignStore();

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Add Tag" />
      <CardLayout>
        <form className="flex flex-col gap-9">
          <div className="self-end">
            <CustomButton
              label="Save and Continue"
              variant="primary"
              className="w-fit h-9 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="submit"
            />
          </div>
          <h1>Review Your Campaign Data</h1>
          <p>Title: {campaignData.title}</p>
          <p>From Name: {campaignData.from_name}</p>
          <p>From Email: {campaignData.from_email}</p>
          <p>Content: {campaignData.content}</p>
        </form>
      </CardLayout>
    </main>
  );
};

export default AddTag;
