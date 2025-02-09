import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import ControlledInputWithFields from "@/components/shared/ControlledInputWithFields";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useCampaignStore } from "@/store/useCampaignStore";
import { useNavigate } from "react-router-dom";

const fields: Field[] = [
  {
    name: "title",
    type: "text",
    isRequired: true,
  },
  {
    name: "from_email",
    type: "email",
    isRequired: true,
  },
  {
    name: "from_name",
    type: "text",
    // isRequired: true,
  },
  {
    name: "content",
    type: "text",
    isRequired: true,
  },
];

const RegularCampaign = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useDynamicForm(fields, {});
  const { setCampaignData } = useCampaignStore();

  const onSubmit = (data: any) => {
    setCampaignData(data);
    navigate(`/email_campaign/add_tag`)
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Campaigns" />
      <CardLayout className="lg:p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border border-[#DDDDDD] rounded-[5px] shadow shadow-[#0000001A] px-5 pt-5 pb-14">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-sm lg:text-base font-medium">Details</h2>
              <h2 className="flex items-center justify-center bg-[#EEEEEE] rounded-[5px] px-2.5 py-2 text-[#555555] text-xs  lg:text-sm font-bold ">
                Set custom campaign name
              </h2>
            </div>
            <div className="space-y-5">
              <ControlledInputWithFields
                name="title"
                control={control}
                placeholder=""
                type="text"
                label="Email subject"
                variant="primary"
                rules={{ required: true }}
              />
              <ControlledInputWithFields
                name="content"
                control={control}
                placeholder=""
                type="text"
                label="Email preview text"
                variant="primary"
                rules={{ required: true }}
              />
              <div className="grid lg:grid-cols-2 gap-x-1 gap-y-7">
                <ControlledInput
                  name="from_name"
                  control={control}
                  placeholder="Enter Your Name"
                  type="text"
                  label="From name"
                  variant="primary"
                  rules={{ required: true }}
                />
                <ControlledInput
                  name="from_email"
                  control={control}
                  placeholder=""
                  type="email"
                  label="Sender`s email address"
                  variant="primary"
                  rules={{ required: true }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-12">
            <CustomButton
              label="Continue"
              variant="primary"
              className="w-[193px] h-[44px] rounded-md text-sm font-semibold"
              size="lg"
              type="submit"
              // disabled={!isValid}
            />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default RegularCampaign;
