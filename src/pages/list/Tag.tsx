import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TagTable from "@/components/list/TagTable";
import { AddTagModal } from "@/components/list/AddTagModal";
import { groups } from "@/api/crud/groups";
const Tag = () => {
  const [groupModal, setGroupModal] = useState(false);

  const { getGroupList } = groups();

  const { data: list, isPending } = getGroupList();

  const groupList = list?.message;

  const totalEntries = groupList?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState<number>(10);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = groupList?.slice(indexOfFirstEntry, indexOfLastEntry);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Group" />
      <CardLayout>
        <div className="flex items-center justify-end mb-9">
          {/* <aside className="flex items-center gap-2 ">
            <h3 className="text-xs font-medium text-black">Sort By:</h3>
            <FilterSelect<string> options={sortOrder} value={sortOrder[0]} />
          </aside> */}
          <div onClick={() => setGroupModal(true)}>
            <Dialog>
              <DialogTrigger>
                <CustomButton
                  label="Add Group"
                  variant="primary"
                  className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-tertiary"
                  size="lg"
                  type="button"
                />
              </DialogTrigger>
              <AddTagModal open={groupModal} onClose={setGroupModal} />
            </Dialog>
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <TagTable listData={currentEntries} />
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

export default Tag;
