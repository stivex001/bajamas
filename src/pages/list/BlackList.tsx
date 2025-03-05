import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import BlackListTable from "@/components/list/BlackListTable";
import { AddBlackListModal } from "@/components/list/AddBlackListModal";
import { useBlackList } from "@/api/crud/blackList";
import FilterSelect from "@/components/shared/FilterSelect";
import { sortOrder } from "../dashboard/data";

const BlackList = () => {
  const [groupModal, setGroupModal] = useState(false);
  const { getBlackList } = useBlackList();

  const { data: list, isPending } = getBlackList();

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
                  label="Import"
                  variant="primary"
                  className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
                  size="lg"
                  type="button"
                />
              </DialogTrigger>
              <AddBlackListModal open={groupModal} onClose={setGroupModal} />
            </Dialog>
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <BlackListTable listData={currentEntries} />
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
