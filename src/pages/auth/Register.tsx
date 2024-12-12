import { AuthTitle } from "@/components/authDetails/AuthTitle";
import AuthLayout from "@/components/layouts/AuthLayout";
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

const Register = () => {

  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data:any) => {
    console.log(data);
  }

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
            name="fullname"
            control={control}
            placeholder="Enter full name"
            type="email"
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
            name="password"
            control={control}
            placeholder="Password"
            type="password"
            label="Confirm Password"
            variant="primary"
            rules={{ required: true }}
          />
          
          <div className="flex justify-center">
            <CustomButton
              label="sign Up"
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

export default Register;
