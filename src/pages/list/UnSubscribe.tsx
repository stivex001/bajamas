import { useSubscribers } from "@/api/crud/subscribers";
import UnSubscriberTable from "@/components/list/UnSubscriberTable";
import { PageTitle } from "@/components/PageTitle";
import BackendPagination from "@/components/shared/BackendPagination";
import { CardLayout } from "@/components/shared/CardLayout";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useState } from "react";

const UnSubscribe = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { getUnsubcriberList } = useSubscribers();

  const { data: list, isPending } = getUnsubcriberList(currentPage);

  const groupList = list?.message?.data;

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
            <UnSubscriberTable listData={groupList} />
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

export default UnSubscribe;
