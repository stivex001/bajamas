import { EditIcon } from "@/assets/svgs/MenuIcon";
import CustomButton from "../shared/CustomButton";
import { useCampaignStore } from "@/store/useCampaignStore";

interface Subscriber {
  id: string;
  email: string;
  fname: string;
  lname: string;
}

interface Group {
  subscribers: Subscriber[];
}
export const SubcriberContents = () => {
  const { campaignData } = useCampaignStore();
  const group = campaignData?.group || [];

  const totalSubscribers: number = group?.reduce(
    (acc: number, curr: Group) => acc + (curr.subscribers?.length || 0),
    0
  );

  return (
    <div className="bg-white border border-[#DDDDDD] shadow-lightshadow py-6">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-base font-medium ">Subscribers</h1>
        <CustomButton
          label="Edit"
          variant="primary"
          className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-[#EEEEEE] text-[#555555] hover:bg-[#EEEEEE]"
          size="lg"
          type="submit"
          icon={EditIcon}
        />
      </div>
      <div className="flex flex-col mt-7">
        <div className=" pb-3 ">
          <table className="w-full  ">
            <thead className="pb-3 border-b">
              <tr className="">
                <th className="px-5 text-left text-sm text-[#555555] pb-3">
                  Sending to
                </th>
                <th className=" px-5 text-left text-sm text-[#555555] pb-3">
                  Subscribers
                </th>
              </tr>
            </thead>
            <tbody>
              {group?.map((item: any) =>
                item?.subscribers?.map((sub: any) => (
                  <tr key={sub?.id} className=" ">
                    <td className="p-5 text-sm text-black border-b ">
                      {sub?.email}
                    </td>
                    <td className="p-5 text-sm text-black border-b text-left">
                      {sub?.fname} {sub?.lname}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <p className="text-[#555555] text-sm">Total subscribers</p>
          <h3 className="text-base font-bold text-black">{totalSubscribers}</h3>
        </div>
      </div>
    </div>
  );
};
