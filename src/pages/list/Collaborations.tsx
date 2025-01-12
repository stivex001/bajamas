import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";
import CollaborationTable from "@/components/list/CollaboarationTable";

const tempplateTable: any[] = [];

const Collaborations = () => {
  const isPending = false;

  const totalEntries = tempplateTable?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState<number>(10);
  // const [openModal, setOpenModal] = useState(true);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = tempplateTable?.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Collaborations" />
      <CardLayout>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <CollaborationTable listData={currentEntries} />
          )}
          {tempplateTable?.length > 0 && (
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

export default Collaborations;
