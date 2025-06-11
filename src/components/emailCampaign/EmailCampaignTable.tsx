// import { ActionModal } from "../shared/ActionModal";
import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  // { content: <>images</> },
  { content: <> Content</> },
  { content: <> Title</> },
  { content: <> From</> },
  { content: <> Recipient</> },
  { content: <> Status</> },
  // { content: <> Actions</> },
];

type listType = {
  listData: any;
};

const renderRow = (item: any, index: number) => {
  const content = item?.content || "";

  // Check if content contains an <img> tag
  const containsImage = /<img\s[^>]*src=["']([^"']+)["'][^>]*>/i.test(content);
  const imageMatch = content.match(/<img\s[^>]*src=["']([^"']+)["'][^>]*>/i);
  const imageUrl = imageMatch?.[1];

  return (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      <td className="py-1 px-4">{index + 1}</td>
      {/* <td className="py-1 px-4">{item?.images}</td> */}
      <td className="py-1 px-4">
        {containsImage && imageUrl ? (
          <img
            src={imageUrl}
            alt="content-thumbnail"
            className="w-14 h-14 object-cover rounded"
          />
        ) : (
          <div className="line-clamp-1 ">{content}</div>
        )}
      </td>
      <td className="py-1 px-4">{item?.title}</td>
      <td className="py-1 px-4 whitespace-nowrap">{item?.from_name}</td>
      <td className="py-1 px-4">{item?.reply_to}</td>

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
