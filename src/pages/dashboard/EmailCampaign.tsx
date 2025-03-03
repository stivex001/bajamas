import CampaignTypeModal from "@/components/emailCampaign/CampaignTypeModal";
import EmailCampaignTable from "@/components/emailCampaign/EmailCampaignTable";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import FilterSelect from "@/components/shared/FilterSelect";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { sortOrder } from "./data";
import { useCampaign } from "@/api/crud/campaigns";

const EmailCampaign = () => {
  const { getCampaignList } = useCampaign();

  const { data: list, isPending } = getCampaignList();

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
      <PageTitle title="Campaigns" />
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
          <Dialog>
            <DialogTrigger>
              <CustomButton
                label="Create Campaign"
                variant="primary"
                className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
                size="lg"
                type="button"
              />
            </DialogTrigger>
            <CampaignTypeModal />
          </Dialog>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <EmailCampaignTable listData={currentEntries} />
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

export default EmailCampaign;
