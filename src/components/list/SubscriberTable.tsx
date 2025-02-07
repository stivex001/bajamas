import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  { content: <>Email</> },
  { content: <>First Name</> },
  { content: <>Last Name</> },
  { content: <> Country</> },
  { content: <> State</> },
  { content: <> Phone</> },
  { content: <> Tag</> },
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
      <td className="py-1 px-4">{index + 1}</td>
      <td className="py-1 px-4">{item?.email}</td>
      <td className="py-1 px-4">{item?.fname}</td>
      <td className="py-1 px-4">{item?.lname}</td>
      <td className="py-1 px-4">{item?.country}</td>
      <td className="py-1 px-4">{item?.state}</td>
      <td className="py-1 px-4">{item?.phone}</td>
      <td className="py-1 px-4">{item?.tag_id}</td>

      <td className="py-1 px-4 ">
        <ActionModal desc={"Subscriber"} />
      </td>
    </tr>
  );
};

const SubscriberTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default SubscriberTable;
