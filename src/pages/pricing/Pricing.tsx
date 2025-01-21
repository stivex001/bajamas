import { PageTitle } from "@/components/PageTitle";
import PricingTable from "@/components/pricing/PricingTable";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useEffect, useState } from "react";


const tempplateTable: any[] = [];

const Pricing = () => {
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
      <PageTitle title="Pricing" />
      <CardLayout className="">
        <h1 className="font-medium text-[#1F1F1F] text-2xl">
          Account Settings
        </h1>
        <div className="border border-[#EDEDED] p-4 rounded-lg flex flex-col gap-2 my-6">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-[#1F1F1F]">Plan: Professional</p>
            <span className="text-sm text-[#8A8A8A]">
              Take your videos to the next level with more features.
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary text-xl">$9.99 / month</p>
            <CustomButton
              label="Upgrade Plan"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              // onClick={() => navigate("/list/subscribers/new-subscriber")}
            />
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <PricingTable listData={currentEntries} />
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

export default Pricing;
