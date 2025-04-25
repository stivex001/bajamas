import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";
import { useState } from "react";
import { toast } from "sonner";
import { useApiMutation } from "@/api/hooks/useApiMutation";

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

const SubscriberTable = ({ listData, refetch }: listType) => {
  const [selectedId, setSeletcedId] = useState(listData?.id);

  const deleteSubscriber = useApiMutation({
    url: `/deletesubscribe/${selectedId}`,
    method: "DELETE",
  });

  const handleDeleteSubscriber = async (id: number) => {
    await setSeletcedId(id);
    try {
      await deleteSubscriber.mutateAsync(
        {},
        {
          onSuccess: (response: any) => {
            console.log(response, "res_");
            toast.success(response?.message);
            refetch();
          },
          onError: (error: any) => {
            toast.error(error?.message);
          },
        }
      );
    } catch (error) {
      console.log("An error occurred: ", error);
    }
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
        <td className="py-1 px-4">
          {item?.groups?.map((group: any) => group?.name).join(", ")}
        </td>
        <td className="py-1 px-4 ">
          <ActionModal
            showDelete
            showBlacklist
            onBlacklist={() => {}}
            onDelete={() => handleDeleteSubscriber(item?.id)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default SubscriberTable;
