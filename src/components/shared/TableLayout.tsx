// TableComponent.tsx
import { ReactNode } from "react";
import EmptyTableState from "./EmptyTableState";

type Header = {
  content: ReactNode; // Text, icon, or any JSX content
  align?: "left" | "center" | "right"; // Optional alignment
};

type TableProps<T> = {
  headers: Header[]; // Array of header names or JSX elements
  data: T[]; // Array of data items
  renderRow: (item: T, index: number) => ReactNode; // Custom render function for table rows
};

const TableLayout = <T,>({ headers, data, renderRow }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto scrollableCSS">
      <table className="min-w-full table-auto tablingOperation">
        <thead className="text-left ">
          <tr className="bg-[#F1F4F9]  text-sm font-bold">
            {headers.map((header, index) => (
              <th key={index} className="py-4 px-4 font-bold text-darker text-sm font-Nunito text-nowrap">
                {header?.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td
                colSpan={headers?.length}
                className="text-center py-14 "
              >
                <EmptyTableState />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
