import { formatDate } from "@/utils/formatDate";
import TableLayout from "../shared/TableLayout";
import { ActionModal } from "../shared/ActionModal";
import { AddTagModal } from "./AddTagModal";
import { useState } from "react";
import { Dialog } from "../ui/dialog";

const headers = [
  { content: <>#</> },
  { content: <>Name</> },
  { content: <> Subscribers</> },
  // { content: <> User Id</> },
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

const TagTable = ({ listData }: listType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);

  const handleView = (item: any) => {
    console.log("View clicked:", item);
    // open view modal or route to details page
  };

  const handleEdit = (item: any) => {
    setSelectedTag(item); // set selected tag for editing
    setIsModalOpen(true); // open the modal
  };

  const handleDelete = (item: any) => {
    console.log("Delete clicked:", item);
    // show confirmation modal
  };

  const renderRow = (item: any, index: number) => {
    const { firstNames, remaining } = (() => {
      const subscribers = item?.subscribers || [];
      const firstFour = subscribers
        .slice(0, 4)
        .map((sub: any) => `${sub.fname} ${sub.lname}`);
      const remainingCount = subscribers.length - 4;

      return {
        firstNames: firstFour.join(", "),
        remaining: remainingCount > 0 ? `+${remainingCount} more` : "",
      };
    })();

    return (
      <tr
        key={index}
        className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
      >
        {/* <td className="py-1 px-4">{item?.id}</td> */}
        <td className="py-1 px-4">{index + 1}</td>
        <td className="py-1 px-4">{item?.name}</td>
        {/* <td className="py-1 px-4">{item?.user_id}</td> */}
        <td className="py-1 px-4 max-w-[150px]">
          {firstNames || "_"}
          {remaining && (
            <span className="font-bold text-primary ml-1">{remaining}</span>
          )}
        </td>

        <td className="py-1 px-4 ">{formatDate(item?.created_at)}</td>
        <td className="py-1 px-4 ">{formatDate(item?.updated_at)}</td>
        <td className="py-1 px-4 ">
          <ActionModal
            desc={"Group"}
            showEdit
            onView={() => handleView(item)}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AddTagModal
          editMode
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedGroup={selectedTag}
        />
      </Dialog>
    </div>
  );
};

export default TagTable;
