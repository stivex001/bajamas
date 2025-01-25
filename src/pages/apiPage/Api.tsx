import { PageTitle } from "@/components/PageTitle";
import nodata from "@/assets/images/empty.png";
import CustomButton from "@/components/shared/CustomButton";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateApiModal } from "@/components/api/CreateApiModal";

const Api = () => {
  return (
    <main className="flex flex-col gap-7 pb-10">
      <PageTitle title="API Access Token" />
      <div className="flex items-center justify-center">
        <div className="space-y-10">
          <img src={nodata} alt="No Data Found" />
          <h1 className="font-bold text-xl text-center lg:text-4xl">
            No tokens created
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Dialog>
              <DialogTrigger>
                <CustomButton
                  label="Create API tokens "
                  variant="primary"
                  className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium"
                  size="lg"
                  type="button"
                  // onClick={() => navigate("/sms_campaign/send_sms")}
                />
              </DialogTrigger>
              <CreateApiModal />
            </Dialog>

            <CustomButton
              label="View API docs "
              variant="primary"
              className="w-fit h-[36px] lg:h-[58px] rounded-[9px] py-4 px-2.5 text-sm lg:text-xl font-medium bg-[#122112]"
              size="lg"
              type="button"
              // onClick={() => navigate("/sms_campaign/send_sms")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Api;
