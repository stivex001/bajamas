import { useSubscribers } from "@/api/crud/subscribers";
import UnSubscriberTable from "@/components/list/UnSubscriberTable";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";

const UnSubscribe = () => {
  const { getUnsubcriberList } = useSubscribers();

  const { data: list, isPending } = getUnsubcriberList();

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
      <PageTitle title="Unsubscribed" />
      <CardLayout>
        {/* <div className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-2.5">
            <CustomButton
              label="Download"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-tertiary"
              size="lg"
              type="button"
              onClick={() => navigate("/list/subscribers/new-subscriber")}
            />
          </div>
        </div> */}
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <UnSubscriberTable listData={currentEntries} />
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

export default UnSubscribe;
