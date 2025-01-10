import TableLayout from "../shared/TableLayout";

const headers = [
  { content: <>#</> },
  { content: <>Email</> },
  { content: <>First Name</> },
  { content: <>Last Name</> },
  { content: <> Country</> },
  { content: <> State</> },
  { content: <> Phone</> },
  { content: <> DOB</> },
  { content: <> Tag</> },
  { content: <> Created At</> },
  { content: <> Status</> },
  { content: <> Subscribe</> },
  { content: <> Updated At</> },
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
      <td className="py-1 px-4">{item?.acctName}</td>
      <td className="py-1 px-4 text-center">{item?.branchID}</td>
      {/* <td className="py-1 px-4 text-center">{item?.regionName}</td>
        <td className="py-1 px-4 text-center">{item?.branchName}</td> */}
      <td className="py-1 px-4 text-center">{item?.ledgerClassName}</td>
      <td className="py-1 px-4 text-center">{item?.ledgerSubClassName}</td>
      <td className="py-1 px-4 text-center">
        {item?.accountClassificationName}
      </td>
      <td className="py-1 px-4">{item?.currencyName}</td>
    </tr>
  );
};

const UnSubscriberTable = ({ listData }: listType) => {
  return (
    <div>
      <TableLayout headers={headers} data={listData} renderRow={renderRow} />
    </div>
  );
};

export default UnSubscriberTable;
