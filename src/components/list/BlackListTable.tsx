// import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";
import ReusableDialog from "../shared/ReuseableDialog";
import DeleteSubscriberModal from "../modal/DeleteSubscriberModal";

const headers = [
  { content: <>#</> },
  { content: <>Email</> },
  { content: <>First Name</> },
  { content: <>Last Name</> },
  { content: <> Country</> },
  { content: <> State</> },
  { content: <> Phone</> },
  { content: <> Group</> },
  { content: <> Actions</> },
];

type listType = {
  listData: any;
  refetch: any;
};

const BlackListTable = ({ listData, refetch }: listType) => {
  const [selectedId, setSeletcedId] = useState(listData?.id);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<listType | null>(null);

  console.log(selectedId);

  const handleDelete = (id: string) => {
    setSeletcedId(id);
    setDeleteModal(true);
  };

  const renderRow = (item: any, index: number) => {
    const handleRowClick = (row: any) => {
      setSelectedRow(row);
    };

    return (
      <tr
        key={index}
        className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
        onClick={() => handleRowClick(item)}
      >
        <td className="py-1 px-4">{index + 1}</td>
        <td className="py-1 px-4">{item?.email}</td>
        <td className="py-1 px-4">{item?.fname}</td>
        <td className="py-1 px-4">{item?.lname}</td>
        <td className="py-1 px-4">{item?.country}</td>
        <td className="py-1 px-4">{item?.state}</td>
        <td className="py-1 px-4">{item?.phone}</td>
        <td className="py-1 px-4">
          {item?.groups?.map((group: any) => group?.name).join(", ")}
        </td>

        <td className="py-1 px-4 ">
          <ActionModal
            desc={"Blacklist"}
            showDelete
            onDelete={() => handleDelete(item?.id)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />

      {
        <ReusableDialog
          title={"Delete Blacklister"}
          open={deleteModal}
          onOpenChange={setDeleteModal}
          className="max-w-xl"
        >
          <DeleteSubscriberModal
            setDeleteModal={setDeleteModal}
            selectedRow={selectedRow || ""}
            refetch={refetch}
          />
        </ReusableDialog>
      }
    </div>
  );
};

export default BlackListTable;
