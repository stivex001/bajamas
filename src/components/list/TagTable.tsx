import { formatDate } from "@/utils/formatDate";
import TableLayout from "../shared/TableLayout";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ThreeDotIcon } from "@/assets/svgs/MenuIcon";

const headers = [
  { content: <>#</> },
  { content: <> Business Id</> },
  { content: <> User Id</> },
  { content: <>Name</> },
  // { content: <> Active</> },
  // { content: <> Unsubscribed</> },
  // { content: <> Bounced</> },
  // { content: <> Spam Reported</> },
  { content: <> Created At</> },
  { content: <> Updated At</> },
  { content: <> Actions</> },
];

type listType = {
  listData: any;
};

const renderRow = (item: any, index: number) => {
  return (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      {/* <td className="py-1 px-4">{item?.id}</td> */}
      <td className="py-1 px-4">{index + 1}</td>
      <td className="py-1 px-4">{item?.business_id}</td>
      <td className="py-1 px-4">{item?.user_id}</td>
      <td className="py-1 px-4">{item?.name}</td>
      <td className="py-1 px-4 text-center">{formatDate(item?.created_at)}</td>
      <td className="py-1 px-4 text-center">{formatDate(item?.updated_at)}</td>
      <td className="py-1 px-4 text-center">
        <Popover className="relative">
          <PopoverButton>
            <div className="w-[85px] bg-primary hover:bg-primary/70 transition flex items-center justify-center rounded-[13px] py-2.5">
              <ThreeDotIcon />
            </div>
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="flex flex-col gap-2 bg-white rounded-lg shadow-xl px-5 py-3"
          >
            {/* <UpdateRole user={user} />
            <UpdateProfile user={user} />
            <DeleteUser user={user} /> */}
          </PopoverPanel>
        </Popover>
      </td>
      
    </tr>
  );
};

const TagTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default TagTable;
