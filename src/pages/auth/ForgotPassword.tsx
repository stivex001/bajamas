import { auth } from "@/api/crud/auth";
import { AuthTitle } from "@/components/authDetails/AuthTitle";
import AuthLayout from "@/components/layouts/AuthLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import { CustomButton } from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState } = useDynamicForm(
    fields,
    {}
  );

  const { isValid } = formState;

  const { forgotPassword } = auth();

  const { isPending, mutateAsync } = forgotPassword;

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          toast.success(response?.message);
          navigate(
            `/auth/reset_password?email=${encodeURIComponent(data?.email)}`
          );
          reset();
        },
        onError: (error: any) => {
          console.log(error, "jjjj");
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-10">
        <AuthTitle
          title="Reset Password"
          question="Remember login details ?"
          link="Log in"
          url="/auth/login"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-7"
        >
          <ControlledInput
            name="email"
            control={control}
            placeholder="Enter Email"
            type="email"
            label="email"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex justify-center">
            <CustomButton
              label="Send Password Reset Link"
              variant="primary"
              className="w-full"
              size="lg"
              type="submit"
              disabled={!isValid}
              isLoading={isPending}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
