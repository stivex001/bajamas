// import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  // { content: <>images</> },
  { content: <> Title</> },
  { content: <> From</> },
  { content: <> Recipient</> },
  { content: <> Content</> },
  { content: <> Status</> },
  // { content: <> Actions</> },
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
      <td className="py-1 px-4">{index + 1}</td>
      {/* <td className="py-1 px-4">{item?.images}</td> */}
      <td className="py-1 px-4">{item?.title}</td>
      <td className="py-1 px-4 whitespace-nowrap">{item?.from_name}</td>
      <td className="py-1 px-4">{item?.reply_to}</td>
      <td className="py-1 px-4">{item?.content}</td>
      <td className="py-1 px-4">
        {item?.status === 1 ? (
          <span className="text-green-500">Active</span>
        ) : item?.status === 2 ? (
          <span className="text-red-500">InActive</span>
        ) : (
          <span className="text-yellow-500">Scheduled</span>
        )}
      </td>
      {/* <td className="py-1 px-4 ">
        <ActionModal desc={"Campaign"} />
      </td> */}
    </tr>
  );
};

const EmailCampaignTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default EmailCampaignTable;
