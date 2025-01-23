import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import { MessagePreview } from "@/components/smsCampaign/MessagePreview";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useNavigate } from "react-router-dom";

const fields: Field[] = [
  {
    name: "firstname",
    type: "text",
    isRequired: true,
  },
  {
    name: "lastname",
    type: "text",
    isRequired: true,
  },
  {
    name: "address",
    type: "text",
    // isRequired: true,
  },
  {
    name: "phone",
    type: "text",
    isRequired: true,
  },

  {
    name: "gender",
    type: "text",
    // errorMessage: "job title is required",
    isRequired: true,
  },
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "dob",
    type: "date",
    errorMessage: "Date must be selected",
    // isRequired: true,
  },

  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
  {
    name: "referal",
    type: "text",
  },
];

const SendSms = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main>
      <PageTitle title="New SMS campaign" />
      <CardLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6 ">
              <div className="pb-12 border border-[#DDDDDD] rounded-[5px] shadow-lightshadow px-5 py-6">
                <h1 className="text-base font-medium mb-6">Details</h1>
                <div className="flex flex-col gap-3">
                  <ControlledInput
                    name="email"
                    control={control}
                    placeholder="summer Sale Campaign"
                    type="text"
                    label="Campaign name"
                    variant="primary"
                    rules={{ required: true }}
                  />
                  <ControlledInput
                    name="password"
                    control={control}
                    placeholder=""
                    type="text"
                    label="Sender"
                    variant="primary"
                    rules={{ required: true }}
                  />
                  <CustomButton
                    label="Go to SMS settings"
                    variant="primary"
                    className="w-fit h-10 rounded-[5px] font-bold text-sm"
                    size="lg"
                    type="button"
                    onClick={() => navigate("/sms_campaign/sms_settings")}
                  />
                </div>
              </div>
              <div className="border border-[#DDDDDD] rounded-[5px] shadow-lightshadow px-5 py-6">
                <h1 className="text-base font-medium mb-6">Message text</h1>
              </div>
            </div>
            <div className="flex-1 border border-[#DDDDDD] rounded-[5px] shadow-lightshadow px-5 py-6">
              <MessagePreview />
            </div>
          </div>
          <div className="flex justify-end mt-12">
            <CustomButton
              label="Save and continue"
              variant="primary"
              className="w-fit h-10 rounded-[5px] font-bold text-sm"
              size="lg"
              type="submit"
            />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default SendSms;
