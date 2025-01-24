import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import SmsSettingsTable from "@/components/smsCampaign/SmsSettingsTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const tempplateTable: any[] = [];
const SmsSettings = () => {
  const navigate = useNavigate();
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
      <PageTitle title="SMS Settings" />
      <CardLayout>
        <div className="flex items-center justify-end mb-8">
          <CustomButton
            label="Add Phone Number"
            variant="primary"
            className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
            size="lg"
            type="button"
            onClick={() => navigate("/sms_campaign/sms_settings/sms_setup")}
          />
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <SmsSettingsTable listData={currentEntries} />
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

export default SmsSettings;
