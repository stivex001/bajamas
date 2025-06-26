import { ArrowLeft, ArrowRight } from "@/assets/svgs/ArrowD";

// interface BackendPaginationMeta {
//   current_page: number;
//   last_page: number;
//   from: number;
//   to: number;
//   total: number;
//   next_page_url: string | null;
//   prev_page_url: string | null;
// }

interface BackendPaginationProps {
  meta: any;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  currentPageSize?: number;
}

const BackendPagination: React.FC<BackendPaginationProps> = ({
  meta,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 30, 50],
  currentPageSize = 10,
}) => {
  const { current_page, last_page, from, to, total } = meta;

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange?.(parseInt(e.target.value));
  };

  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(last_page);
  const handlePrevPage = () =>
    meta.prev_page_url && onPageChange(current_page - 1);
  const handleNextPage = () =>
    meta.next_page_url && onPageChange(current_page + 1);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 3;

    if (last_page <= 6) {
      for (let i = 1; i <= last_page; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= maxVisiblePages; i++) {
        pages.push(i);
      }

      if (
        current_page > maxVisiblePages &&
        current_page < last_page - maxVisiblePages + 1
      ) {
        pages.push(current_page, "...");
      } else if (current_page >= last_page - maxVisiblePages + 1) {
        pages.push("...");
      }

      for (let i = last_page - maxVisiblePages + 1; i <= last_page; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="bg-white border-b border-operationBg py-4">
      <section className="flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm font-normal text-[#949699]">
          Showing {from} to {to} of {total} entries
        </p>

        {onPageSizeChange && (
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="perPageSelect">Rows per page:</label>
            <select
              id="perPageSelect"
              value={currentPageSize}
              onChange={handlePageSizeChange}
              className="border px-2 py-1 rounded text-sm"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex gap-2 items-center cursor-pointer">
          <button
            onClick={handleFirstPage}
            disabled={current_page === 1}
            className="text-sm disabled:cursor-not-allowed"
          >
            First
          </button>

          <button
            onClick={handlePrevPage}
            disabled={!meta.prev_page_url}
            className="disabled:cursor-not-allowed"
          >
            <ArrowLeft />
          </button>

          <div className="flex items-center justify-between gap-1 rounded-[29px] bg-[#F3F2F7] h-[29px]">
            {getPageNumbers().map((page, index) => (
              <p
                key={index}
                className={`rounded-[29px] h-[29px] w-[29px] flex items-center justify-center ${
                  current_page === page ? "text-white bg-[#001F56]" : ""
                } ${page === "..." ? "cursor-default text-gray-500" : ""}`}
                onClick={() => typeof page === "number" && onPageChange(page)}
              >
                {page}
              </p>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={!meta.next_page_url}
            className="disabled:cursor-not-allowed"
          >
            <ArrowRight />
          </button>

          <button
            onClick={handleLastPage}
            disabled={current_page === last_page}
            className="text-sm disabled:cursor-not-allowed"
          >
            Last
          </button>
        </div>
      </section>
    </div>
  );
};

export default BackendPagination;
