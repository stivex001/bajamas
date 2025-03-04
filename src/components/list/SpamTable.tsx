import { formatDate } from "@/utils/formatDate";
import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  { content: <>Email</> },
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
      <td className="py-1 px-4">{index + 1}</td>
      <td className="py-1 px-4">{item?.email}</td>
      <td className="py-1 px-4">{formatDate(item?.created_at)}</td>
      <td className="py-1 px-4">{formatDate(item?.updated_at)}</td>

      <td className="py-1 px-4 ">
        <ActionModal desc={"Spam"} />
      </td>
    </tr>
  );
};

const SpamTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default SpamTable;
