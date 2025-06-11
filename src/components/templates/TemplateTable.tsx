import { formatDate } from "@/utils/formatDate";
import TableLayout from "../shared/TableLayout";
import { getContentPreview } from "@/utils/renderContentPreview";

const headers = [
  { content: <>#</> },
  { content: <>Thumbnail</> },
  { content: <> Name</> },
  { content: <> Description</> },
  { content: <> Created At</> },
  { content: <> Updated At</> },
  // { content: <> Actions</> },
];

type listType = {
  listData: any;
};

const renderRow = (item: any, index: number) => {
  const preview = getContentPreview(item?.design_html || "");
  return (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      <td className="py-1 px-4">{index + 1}</td>
      <td className="py-1 px-4">
        {preview.type === "image" ? (
          <img
            src={preview.value}
            alt="thumbnail"
            className="w-14 h-14 object-cover rounded"
          />
        ) : (
          <div className=" border w-14 h-14 object-cover rounded">

          </div>
        )}
      </td>
      <td className="py-1 px-4 ">{item?.template_name}</td>
      <td className="py-1 px-4 ">{item?.template_describ}</td>
      <td className="py-1 px-4 ">{formatDate(item?.created_at)}</td>
      <td className="py-1 px-4 ">{formatDate(item?.updated_at)}</td>
    </tr>
  );
};

const TemplateTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default TemplateTable;
