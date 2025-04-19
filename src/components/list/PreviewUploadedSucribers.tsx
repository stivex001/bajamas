type Props = {
  previewData: any;
};

export const PreviewUploadedSucribers = ({ previewData }: Props) => {
  return (
    <div className="flex-1 rounded-[14px] shadow-lg py-8 px-4 lg:px-12 overflow-auto">
      <h1 className="text-[#437742] text-2xl mb-2 ">List preview</h1>
      <p className="text-base text-[#83848F] mb-4">
        Each subscriber must be in a new row, subscriber fields must be in
        separate columns
      </p>

      {previewData?.length > 0 ? (
        <div className="overflow-x-auto mt-3">
          <table className="table-auto w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                {previewData[0]?.map((col: any, i: number) => (
                  <th key={i} className="border px-2 py-1 text-left">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.slice(1, 6).map((row: any, i: number) => (
                <tr key={i}>
                  {row.map((cell: any, j: number) => (
                    <td key={j} className="border px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {previewData?.length > 6 && (
            <p className="text-xs mt-2 text-gray-500">
              Showing first 5 rows...
            </p>
          )}
        </div>
      ) : (
        <p className="text-xs text-gray-400 mt-3">No file selected yet.</p>
      )}
    </div>
  );
};
