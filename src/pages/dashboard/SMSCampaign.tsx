import { AuthUser } from "@/api/hooks/types";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import { CustomSelect } from "@/components/shared/ControlledSelect";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import SmsTable from "@/components/smsCampaign/SmsTable";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const showList = [
  { value: "20", label: "10" },
  { value: "10", label: "20" },
  { value: "4", label: "4" },
];

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

const tempplateTable: any[] = [];

const SMSCapaign = () => {
  const navigate = useNavigate()
  const { control } = useDynamicForm<AuthUser>(fields, {});
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
      <PageTitle title="SMS Campaigns" />
      <CardLayout>
        <div className="flex items-center justify-between mb-9">
          <aside className="flex items-center gap-2 ">
            <h3 className="text-xs font-medium text-black">Sort By:</h3>
            <CustomSelect
              name="bank"
              options={showList}
              control={control}
              rules={{ required: true }}
              placeholder="10"
              className="bg-transparent "
            />
          </aside>
          <CustomButton
            label="Create SMS Campaign"
            variant="primary"
            className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
            size="lg"
            type="button"
            onClick={() => navigate("/sms_campaign/send_sms")}
          />
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <SmsTable listData={currentEntries} />
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

export default SMSCapaign;
