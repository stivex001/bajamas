import { auth, CurrentUser } from "@/api/crud/auth";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "old_password",
    type: "text",
    errorMessage: "Current Password is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
  {
    name: "confirm_pass",
    type: "text",
    errorMessage: "Password is required",
  },
];

const ChangePassword = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset, formState, watch } =
    useDynamicForm<CurrentUser>(fields, {});

  const newPassword = watch("password");
  const confirmPassword = watch("confirm_pass");

  const passwordMismatch = newPassword !== confirmPassword;

  const { isValid } = formState;

  const { changePassword } = auth();

  const { isPending, mutateAsync } = changePassword;

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          console.log(response);
          if (response?.status === true) {
            toast.success(response?.message);
            navigate("/auth/login");
            reset();
          } else {
            toast.error(response?.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Change Password" />

      <CardLayout className="py-5">
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-5/12 mx-auto ">
          <div className="grid grid-cols-1 gap-y-7">
            <ControlledInput
              name="old_password"
              control={control}
              placeholder=""
              type="password"
              label="Current Password"
              variant="primary"
            />
            <ControlledInput
              name="password"
              control={control}
              placeholder=""
              type="password"
              label="New Password"
              variant="primary"
            />

            <ControlledInput
              name="confirm_pass"
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
              disabled={!isValid || passwordMismatch}
              isLoading={isPending}
            />
          </div>
        </form>
      </CardLayout>
    </main>
  );
};

export default ChangePassword;
