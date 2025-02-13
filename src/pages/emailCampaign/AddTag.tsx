import { FilterIcon, SearchIcon } from "@/assets/svgs/SearchIcon";
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
          <div className="bg-[#00000000]">
            <h1 className="font-semibold text-base text-[#464547] mb-2.5">Send to these groups/segments</h1>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="border-2 border-[#D5D5D5] rounded-[3px] px-2 py-3 flex items-center gap-3">
                <SearchIcon />
                <input
                  className="text-xs w-full outline-none fo"
                  type="text"
                  placeholder="Find by name"
                />
              </div>
              <FilterIcon />
            </div>
            <h1>Review Your Campaign Data</h1>
            <p>Title: {campaignData.title}</p>
            <p>From Name: {campaignData.from_name}</p>
            <p>From Email: {campaignData.from_email}</p>
            <p>Content: {campaignData.content}</p>
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default AddTag;
