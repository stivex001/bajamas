import { AuthTitle } from "@/components/authDetails/AuthTitle";
import AuthLayout from "@/components/layouts/AuthLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import { Checkbox } from "@/components/ui/checkbox";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { Link } from "react-router-dom";

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

const Login = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-10">
        <AuthTitle
          title="Sign in"
          question="Don’t have an account?"
          link="Create now"
          url="/auth/register"
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
            name="password"
            control={control}
            placeholder="Password"
            type="password"
            label="Password"
            variant="primary"
            rules={{ required: true }}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label className="text-sm text-boxgray leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </label>
            </div>
            <Link to='/auth/reset_password' className="text-base font-medium underline text-primary">Forgot Password?</Link>
          </div>

          <div className="flex justify-center">
            <CustomButton
              label="Sign In"
              variant="primary"
              className="w-full"
              size="lg"
              type="submit"
              // disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
