import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { FaCamera } from "react-icons/fa";

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

type Props = {
  onEdit: () => void;
};

export const UserInfo = ({ onEdit }: Props) => {
  const { control } = useDynamicForm(fields, {});

  return (
    <CardLayout className="py-5">
      <form className="lg:w-8/12 mx-auto flex flex-col gap-9">
        <div className="bg-[#ECECEE] w-20 h-20 rounded-full mx-auto flex items-center justify-center cursor-pointer">
          <FaCamera />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-12">
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Full Name"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Email Address"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Phone  Number"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Company / Organization"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Country *"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="State / Province / Region *"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="City *"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Address 1 *"
            variant="primary"
          />
        </div>
        <div className="flex justify-center">
          <CustomButton
            label="Edit"
            variant="primary"
            className="w-[274px]"
            size="lg"
            onClick={onEdit}
            // disabled={!isValid}
          />
        </div>
      </form>
    </CardLayout>
  );
};
