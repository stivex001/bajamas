import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
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

const RegularCampaign = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
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
              <ControlledInput
                name="email"
                control={control}
                placeholder=""
                type="text"
                label="Email subject"
                variant="primary"
                rules={{ required: true }}
              />
              <ControlledInput
                name="email"
                control={control}
                placeholder=""
                type="text"
                label="Email preview text"
                variant="primary"
                rules={{ required: true }}
              />
              <div className="grid lg:grid-cols-2 gap-x-1 gap-y-7">
                <ControlledInput
                  name="email"
                  control={control}
                  placeholder="Enter Email"
                  type="text"
                  label="From name"
                  variant="primary"
                  rules={{ required: true }}
                />
                <ControlledInput
                  name="email"
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
