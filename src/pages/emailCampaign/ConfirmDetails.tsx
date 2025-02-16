import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { Preview } from "./Preview";
import { Design } from "./Design";

const ConfirmDetails = () => {
  

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Confirm Details " />
      <CardLayout bgColor="#f8fafc">
        <form className="flex flex-col gap-2">
          <div className="flex items-center gap-3 justify-end">
            <CustomButton
              label="Schedule Now"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
            />
            <CustomButton
              label="Send Now"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="submit"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-7">
            <Preview />
            <Design />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default ConfirmDetails;
