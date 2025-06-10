import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { Preview } from "../../components/emailCampaign/Preview";
import { Design } from "../../components/emailCampaign/Design";
import { SuccesModal } from "@/components/modal/SuccesModal";
import { useState } from "react";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useCampaign } from "@/api/crud/campaigns";
import { toast } from "sonner";
import ScheduleModal from "@/components/shared/ScheduleModal";

const ConfirmDetails = () => {
  const { campaignData } = useCampaignStore();
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const { createCampaign, getCampaignList } = useCampaign();

  const { mutate, isPending } = createCampaign;
  const { refetch } = getCampaignList();

  const group = campaignData?.group || [];
  const subscribers = group
    ?.flatMap((grp: any) => grp?.subscribers?.map((sub: any) => sub?.email))
    ?.join(", ");

  const handleSend = async () => {
    const payload = new FormData();

    const groupIds = group?.map((grp: any) => grp.id) || [];

    groupIds?.forEach((id: any) => {
      payload.append("tag_id[]", id?.toString());
    });

    payload.append("title", campaignData?.title || "");
    payload.append("subject", campaignData?.title || "");
    payload.append("from_email", campaignData?.from_email || "");
    payload.append("from_name", campaignData?.from_name || "");
    payload.append("content", campaignData?.content || "");
    payload.append("content_type", campaignData?.content_type || "");
    payload.append(
      "schedule_date",
      campaignData?.schedule_date?.toString() ||
        new Date().toISOString().slice(0, 19).replace("T", " ")
    );
    payload.append("reply_to", subscribers || "");
    payload.append("status", "1");

    try {
      await mutate(payload, {
        onSuccess: (res: any) => {
          if (res?.status === true) {
            setSuccessModalOpen(true);
            setSuccessMessage(res?.message);
            refetch();
          } else {
            toast.error(res?.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
      });
    } catch (error) {}
  };

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
              onClick={() => setIsScheduleModalOpen(true)}
            />
            <CustomButton
              label="Send Now"
              variant="primary"
              className="w-fit h-12 rounded-[4px] p-2 text-xs font-medium"
              size="lg"
              type="button"
              onClick={handleSend}
              disabled={isPending}
              isLoading={isPending}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-7">
            <Preview />
            <Design />
          </div>
        </form>
        <ScheduleModal
          isOpen={isScheduleModalOpen}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      </CardLayout>
      {successModalOpen && (
        <SuccesModal
          open={successModalOpen}
          toggle={setSuccessModalOpen}
          url="/email_campaign"
          content={successMessage}
          refetch={refetch}
        />
      )}
    </main>
  );
};

export default ConfirmDetails;
