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
  },
  {
    name: "lastname",
    type: "text",
  },
  {
    name: "address",
    type: "text",
  },
  {
    name: "phone",
    type: "text",
  },

  {
    name: "gender",
    type: "text",
  },
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
  },
  {
    name: "dob",
    type: "date",
    errorMessage: "Date must be selected",
  },

  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
  },
  {
    name: "referal",
    type: "text",
  },
];

const ChangePassword = () => {
  const { control } = useDynamicForm(fields, {});

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Change Password" />

      <CardLayout className="py-5">
        <form className="lg:w-5/12 mx-auto ">
          <div className="grid grid-cols-1 gap-y-7">
            <ControlledInput
              name="email"
              control={control}
              placeholder=""
              type="password"
              label="Current Password"
              variant="primary"
            />
            <ControlledInput
              name="email"
              control={control}
              placeholder=""
              type="password"
              label="New Password"
              variant="primary"
            />

            <ControlledInput
              name="email"
              control={control}
              placeholder=""
              type="password"
              label="Confirm Password"
              variant="primary"
            />
          </div>
          <div className="flex justify-center mt-9">
            <CustomButton
              label="Save"
              variant="primary"
              className="w-[274px]"
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

export default ChangePassword;
