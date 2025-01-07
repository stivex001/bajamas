import { AuthUser } from "@/api/hooks/types";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import { CustomSelect } from "@/components/shared/ControlledSelect";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import Section from "@/components/shared/Section";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import TemplateTable from "@/components/templates/TemplateTable";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useEffect, useState } from "react";

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

const Templates = () => {
  const { control } = useDynamicForm<AuthUser>(fields, {});
  const isPending = false;

  const totalEntries = tempplateTable?.length;
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState<number>(10);
    // const [openModal, setOpenModal] = useState(true);
  
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = tempplateTable?.slice(indexOfFirstEntry, indexOfLastEntry);
  
    useEffect(() => {
      setCurrentPage(1);
    }, [entriesPerPage]);

  return (
    <Section>
      <PageTitle title="Templates" />
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
          <div className="flex items-center gap-2.5">
            <CustomButton
              label="My Templates"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
            />
            <CustomButton
              label="Base Template Gallary"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
            />
            <CustomButton
              label="Create +"
              variant="primary"
              className="w-fit h-7 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
            />
          </div>
        </div>
        <div>
          {isPending ? (
            <SkeletonTableLoader />
          ) : (
            <TemplateTable listData={currentEntries} />
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
    </Section>
  );
};

export default Templates;
