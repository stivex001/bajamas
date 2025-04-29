import { PageTitle } from "@/components/PageTitle";

import { useApiToken } from "@/api/crud/apiToken";
import ApiEmptyPage from "@/components/api/ApiEmptyPage";
import TokenList from "@/components/api/TokenList";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import CustomButton from "@/components/shared/CustomButton";
import { CreateApiModal } from "@/components/api/CreateApiModal";

const Api = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getApiToken } = useApiToken();
  const { data, isLoading } = getApiToken();

  const handleOpenChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  const tokenData = data?.data;
  console.log(tokenData);

  return (
    <main className="flex flex-col pb-10">
      <div className="flex items-center justify-between ">
        <PageTitle title="API Access Token" />
        {tokenData && tokenData?.length > 0 && (
          <>
            <div className="flex items-center justify-center gap-3">
              <CustomButton
                label="Create API tokens"
                variant="primary"
                className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium"
                size="lg"
                type="button"
                onClick={() => handleOpenChange(true)} // manually trigger open
              />

              <CustomButton
                label="View API docs"
                variant="primary"
                className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium bg-[#122112]"
                size="lg"
                type="button"
              />
            </div>
            <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
              <CreateApiModal onClose={() => handleOpenChange(false)} />
            </Dialog>
          </>
        )}
      </div>
      {tokenData && tokenData?.length > 0 ? (
        <TokenList token={tokenData} loading={isLoading} />
      ) : (
        <ApiEmptyPage
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Api;
