import { auth } from "@/api/crud/auth";
import { AuthTitle } from "@/components/authDetails/AuthTitle";
import AuthLayout from "@/components/layouts/AuthLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "name",
    type: "text",
    isRequired: true,
  },

  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
  {
    name: "confirmPassword",
    type: "text",
    errorMessage: "Password must be the same as that of password",
    isRequired: true,
  },
];

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit,formState } = useDynamicForm(fields, {});

  const { isValid } = formState;

  const { registerUser } = auth();

  const { isPending, mutateAsync } = registerUser;

  const onSubmit = async(data: any) => {
    try {
      await mutateAsync(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          toast.success(response?.message);
          navigate("/auth/login");
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
    <AuthLayout>
      <div className="flex flex-col gap-10">
        <AuthTitle
          title="Sign Up"
          question="Already have an account ?"
          link="Log In"
          url="/auth/login"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-7"
        >
          <ControlledInput
            name="name"
            control={control}
            placeholder="Enter full name"
            type="text"
            label="Full Name"
            variant="primary"
            rules={{ required: true }}
          />

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
            name="password"
            control={control}
            placeholder="Password"
            type="password"
            label="Password"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="confirmPassword"
            control={control}
            placeholder="Password"
            type="password"
            label="Confirm Password"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex justify-center">
            <CustomButton
              label="Sign Up"
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

export default Register;
