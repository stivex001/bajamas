import SubscriberTable from "@/components/list/SubscriberTable";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscribers } from "@/api/crud/subscribers";

const Subscribers = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { getSubscriberList } = useSubscribers();

  const { data: list, isPending, refetch } = getSubscriberList(currentPage);
  console.log(list, "list_sub");

  const groupList = list?.message?.data;
  const totalPages = list?.message?.last_page;

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Subscribers" />
      <CardLayout>
        <div className="flex items-center justify-end mb-9">
          {/* <aside className="flex items-center gap-2 ">
            <h3 className="text-xs font-medium text-black">Sort By:</h3>
            <FilterSelect<string>
              options={sortOrder}
              label="Sort By"
              onChange={(selected) => updateFilter("sortOrder", selected)}
              value={sortOrder[0]}
            />
          </aside> */}
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
          {totalPages && totalPages > 1 && (
            <Pagination
              currentPage={list?.message?.current_page}
              totalPages={list?.message?.last_page}
              from={list?.message?.from}
              to={list?.message?.to}
              total={list?.message?.total}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </CardLayout>
    </main>
  );
};

export default Subscribers;
