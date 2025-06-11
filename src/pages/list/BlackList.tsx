import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";
import BlackListTable from "@/components/list/BlackListTable";
import { useBlackList } from "@/api/crud/blackList";

const BlackList = () => {
  // const [groupModal, setGroupModal] = useState(false);
  const { getBlackList } = useBlackList();

  const { data: list, isPending, refetch } = getBlackList();

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
      <PageTitle title="Blacklist" />
      <CardLayout>
        <div className="flex items-center justify-between mb-9">
          {/* <div onClick={() => setGroupModal(true)}>
            <Dialog>
              <DialogTrigger>
                <CustomButton
                  label="Import"
                  variant="primary"
                  className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
                  size="lg"
                  type="button"
                />
              </DialogTrigger>
              <AddBlackListModal open={groupModal} onClose={setGroupModal} />
            </Dialog>
          </div> */}
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <BlackListTable listData={currentEntries} refetch={refetch} />
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

export default BlackList;
