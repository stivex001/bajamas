import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";
import filterIcon from "@/assets/svgs/filter.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { groups } from "@/api/crud/groups";
import { ScreenLoader } from "@/components/shared/ScreenLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddTag = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const { setCampaignData } = useCampaignStore();

  const { getGroupList } = groups();

  const { data: list, isPending } = getGroupList();

  const groupList = list?.message;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<any[]>([]);

  const filteredGroups =
    groupList?.filter((group) =>
      group?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  const handleSelectGroup = (groupId: any) => {
    setSelectedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleSelectAll = () => {
    if (selectedGroups?.length === filteredGroups?.length) {
      setSelectedGroups([]); // Unselect all
    } else {
      setSelectedGroups(filteredGroups?.map((group) => group.id.toString())); // Select all
    }
  };

  const isAllSelected =
    filteredGroups.length > 0 &&
    selectedGroups?.length === filteredGroups.length;

  console.log(groupList, "list___");

  const onSubmit = (data: any) => {
    setCampaignData({ ...data, group: selectedGroups });
    navigate(`/email_campaign/confirm_details`);
  };

  if (isPending) {
    return <ScreenLoader />;
  }

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Add Tag" />
      <CardLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="w-12 h-10 bg-[#eeeeee] flex items-center justify-center cursor-pointer rounded-md ">
                  <img src={filterIcon} alt="icon" />
                </div>
              </div>
              <div>
                <div className="h-16 flex items-center space-x-2">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#C7C6C6] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select all
                  </label>
                </div>
              </div>
              <div>
                {filteredGroups?.length ?? 0 > 0 ? (
                  <div className="flex flex-col gap-4">
                    {filteredGroups?.map((group, index) => (
                      <div
                        key={group?.id}
                        className={`h-16 flex items-center gap-2.5 ${
                          index !== filteredGroups.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <Checkbox
                          checked={selectedGroups.includes(group)}
                          onCheckedChange={() => handleSelectGroup(group)}
                        />

                        <p className="text-sm font-semibold text-[#7E7C7B]">
                          {group?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">No data found</p>
                )}
              </div>
            </div>
            <div className="flex-1 py-7 px-6 rounded-lg"></div>
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default AddTag;
