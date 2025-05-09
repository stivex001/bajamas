
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import Pagination from "@/components/shared/Pagination";
import Section from "@/components/shared/Section";
import SkeletonTableLoader from "@/components/shared/SkeletonTableLoader";
import TemplateTable from "@/components/templates/TemplateTable";
import { useEffect, useState } from "react";

const tempplateTable: any[] = [];

const Templates = () => {
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
    <Section>
      <PageTitle title="Templates" />
      <CardLayout>
        <div className="flex items-center justify-end mb-9">
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
