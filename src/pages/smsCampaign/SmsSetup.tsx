import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import CustomButton from "@/components/shared/CustomButton";
import { MessagePreview } from "@/components/smsCampaign/MessagePreview";
import { Purchase } from "@/components/smsCampaign/Purchase";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";

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
const SmsSetup = () => {
  const { handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="SMS setup" />
      <CardLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 pb-12 border border-[#DDDDDD] rounded-[5px] shadow-lightshadow px-5 py-6">
            <h1 className="text-xs font-semibold text-[#9C9C9D] mb-6">This is what your customers will see as the message sender.</h1>
            <Purchase />
            </div>
            <div className="flex-1 border border-[#DDDDDD] rounded-[5px] shadow-lightshadow px-5 py-6">
              <MessagePreview />
            </div>
          </div>
          <div className="flex justify-end mt-8">
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

export default SmsSetup;
