import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  { content: <>Who has invited you for collaborations</> },
  { content: <> Created At</> },
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
      <td className="py-1 px-4">{item?.name}</td>
      <td className="py-1 px-4">{item?.email}</td>

      <td className="py-1 px-4 ">
        <ActionModal desc={"Invitee"} />
      </td>
    </tr>
  );
};

const CollaborationTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default CollaborationTable;
