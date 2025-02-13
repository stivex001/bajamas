import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";
import filterIcon from "@/assets/svgs/filter.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { groups } from "@/api/crud/groups";
import { ScreenLoader } from "@/components/shared/ScreenLoader";

const AddTag = () => {
  const { campaignData } = useCampaignStore();

  const { getGroupList } = groups();

  const { data: list, isPending } = getGroupList();

  const groupList = list?.message;

  console.log(groupList, "list___");
  

  if (isPending) {
    return <ScreenLoader />;
  }

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
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="border-2 border-[#D5D5D5] w-full flex-1 py-7 px-6 rounded-lg">
              <h1 className="font-semibold text-base text-[#464547] mb-2.5">
                Send to these groups/segments
              </h1>
              <div className=" flex items-center gap-2.5 mb-5">
                <div className="w-full border-2 border-[#D5D5D5] rounded-[3px] px-2 py-3 flex items-center gap-3">
                  <SearchIcon />
                  <input
                    className="text-xs w-full outline-none bg-transparent"
                    type="text"
                    placeholder="Find by name"
                  />
                </div>
                <div className="w-12 h-10 bg-[#eeeeee] flex items-center justify-center cursor-pointer rounded-md ">
                  <img src={filterIcon} alt="icon" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#C7C6C6] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select all
                  </label>
                </div>
              </div>
              <h1>Review Your Campaign Data</h1>
              <p>Title: {campaignData.title}</p>
              <p>From Name: {campaignData.from_name}</p>
              <p>From Email: {campaignData.from_email}</p>
              <p>Content: {campaignData.content}</p>
            </div>
            <div className="flex-1 py-7 px-6 rounded-lg"></div>
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default AddTag;
