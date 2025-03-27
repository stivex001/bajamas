import { useEffect } from "react";
import { auth } from "@/api/crud/auth";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { FaCamera } from "react-icons/fa";

const fields: Field[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "phone", type: "text" },
  { name: "address1", type: "text" },
  { name: "business", type: "text" },
  { name: "country", type: "text" },
  { name: "state", type: "text" },
  { name: "city", type: "text" },
];

type Props = {
  onEdit: () => void;
};

export const UserInfo = ({ onEdit }: Props) => {
  const { getCurrentUser } = auth();
  const { data } = getCurrentUser();
  const userInfo = Array.isArray(data?.data) ? data?.data[0] || {} : {};

  // Initialize form hook with empty values
  const { control, setValue } = useDynamicForm(fields, {
    name: "",
    email: "",
    phone: "",
    address1: "",
    business: "",
    country: "",
    state: "",
    city: "",
  });

  // When userInfo changes, update the form values
  useEffect(() => {
    if (userInfo) {
      setValue("name", userInfo.name || "");
      setValue("email", userInfo.email || "");
      setValue("phone", userInfo.phone || "");
      setValue("address1", userInfo.address1 || "");
      setValue("business", userInfo.business?.name || "");
      setValue("country", userInfo.country || "");
      setValue("state", userInfo.state || "");
      setValue("city", userInfo.city || "");
    }
  }, [userInfo, setValue]); // Re-run effect when userInfo changes

  return (
    <CardLayout className="py-5">
      <form className="lg:w-8/12 mx-auto flex flex-col gap-9">
        <div className="bg-[#ECECEE] w-20 h-20 rounded-full mx-auto flex items-center justify-center cursor-pointer">
          <FaCamera />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-12">
          {fields.map((field) => (
            <ControlledInput
              key={field.name}
              name={field.name}
              control={control}
              placeholder=""
              type={field.type}
              label={field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              variant="primary"
              readOnly
            />
          ))}
        </div>
        <div className="flex justify-center">
          <CustomButton
            label="Edit"
            variant="primary"
            className="w-[274px]"
            size="lg"
            onClick={onEdit}
          />
        </div>
      </form>
    </CardLayout>
  );
};
