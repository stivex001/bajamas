import SubscriberTable from "@/components/list/SubscriberTable";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import BackendPagination from "@/components/shared/BackendPagination"; // ✅ NEW IMPORT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscribers } from "@/api/crud/subscribers";

const Subscribers = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { getSubscriberList } = useSubscribers();
  const { data: list, isPending, refetch } = getSubscriberList(currentPage);

  const groupList = list?.message?.data;

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Subscribers" />
      <CardLayout>
        <div className="flex items-center justify-end mb-9">
          <div className="flex items-center gap-2.5">
            <CustomButton
              label="Upload CSV file"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium bg-tertiary"
              size="lg"
              type="button"
              onClick={() => navigate("/list/subscribers/new-subscriber")}
            />

            <CustomButton
              label="New +"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={() => navigate("/list/subscribers/new-subscriber")}
            />
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <SubscriberTable refetch={refetch} listData={groupList} />
          )}
          {groupList && groupList?.length > perPage && (
            <BackendPagination
              meta={list.message}
              currentPageSize={perPage}
              onPageChange={(page) => setCurrentPage(page)}
              onPageSizeChange={(size) => {
                setPerPage(size);
                setCurrentPage(1);
              }}
            />
          )}
        </div>
      </CardLayout>
    </main>
  );
};

export default Subscribers;
