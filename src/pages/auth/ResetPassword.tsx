import { auth } from "@/api/crud/auth";
import { AuthUser } from "@/api/hooks/types";
import { AuthTitle } from "@/components/authDetails/AuthTitle";
import AuthLayout from "@/components/layouts/AuthLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "code",
    type: "text",
    errorMessage: "Code is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "text",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "confirm_pass",
    type: "text",
    errorMessage: "Password must be the same as that of password",
  },
];

const ResetPassword = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const email = params.get("email");

  const {
    control,
    handleSubmit,
    reset,
    formState,
    watch,
    setError,
    clearErrors,
  } = useDynamicForm<AuthUser>(fields, {
    email: email || "",
  });

  const password = watch("password");
  const confirm_pass = watch("confirm_pass");

  const { isValid } = formState;

  const { updatePassword } = auth();

  const { isPending, mutateAsync } = updatePassword;

  useEffect(() => {
    if (confirm_pass) {
      if (confirm_pass !== password) {
        setError("confirm_pass", {
          type: "manual",
          message: "Passwords do not match",
        });
      } else {
        clearErrors("confirm_pass");
      }
    }
  }, [confirm_pass, password, setError, clearErrors]);

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          toast.success(response?.message);
          if (response?.status === true) {
            navigate(`/auth/login`);
            reset();
          }
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
          <ControlledInput
            name="code"
            control={control}
            placeholder="Enter Code Sent to your mail"
            type="text"
            label="Code"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder="Enter New Password"
            type="text"
            label="Password"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="confirm_pass"
            control={control}
            placeholder="Confirm Password"
            type="text"
            label="Confirm Password"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex justify-center">
            <CustomButton
              label="Confirm"
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

export default ResetPassword;
