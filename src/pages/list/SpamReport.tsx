import SpamTable from "@/components/list/SpamTable";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ReportSpamModal } from "@/components/list/ReportSpamModal";
import FilterSelect from "@/components/shared/FilterSelect";
import { sortOrder } from "../dashboard/data";
import { useSpamReport } from "@/api/crud/spamReport";

const SpamReport = () => {
  const [groupModal, setGroupModal] = useState(false);

  const { getSpamList } = useSpamReport();

  const { data: list, isPending } = getSpamList();

  const groupList = list?.message;

  const totalEntries = groupList?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState<number>(10);
  // const [openModal, setOpenModal] = useState(true);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = groupList?.slice(indexOfFirstEntry, indexOfLastEntry);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Spams Reported" />
      <CardLayout>
        <div className="flex items-center justify-between mb-9">
          <aside className="flex items-center gap-2 ">
            <h3 className="text-xs font-medium text-black">Sort By:</h3>
            <FilterSelect<string>
              options={sortOrder}
              // label="Sort By"
              // onChange={(selected) => updateFilter("sortOrder", selected)}
              value={sortOrder[0]}
            />
          </aside>
          <div onClick={() => setGroupModal(true)}>
            <Dialog>
              <DialogTrigger>
                <CustomButton
                  label="Report Spam"
                  variant="primary"
                  className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
                  size="lg"
                  type="button"
                />
              </DialogTrigger>
              <ReportSpamModal open={groupModal} onClose={setGroupModal} />
            </Dialog>
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <SpamTable listData={currentEntries} />
          )}
          {(groupList?.length ?? 0) > entriesPerPage && (
            <Pagination
              currentPage={currentPage}
              totalEntries={totalEntries}
              entriesPerPage={entriesPerPage}
              onPageChange={(page: any) => setCurrentPage(page)}
            />
          )}
        </div>
      </CardLayout>
    </main>
  );
};

export default SpamReport;
