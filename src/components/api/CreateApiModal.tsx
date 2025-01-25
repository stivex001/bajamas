import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";
import { CustomSelect } from "../shared/ControlledSelect";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

const showList = [
  { value: "10", label: "10 days" },
  { value: "30", label: "30 days" },
  { value: "60", label: "60 days" },
];

export const CreateApiModal = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
      <ModalHeader title="Select token validity time" icon={X} />
      <form  onSubmit={handleSubmit(onSubmit)}>
        <ModalBody className="border-t border-b py-5">
          <CustomSelect
           name="bank"
           options={showList}
           control={control}
           rules={{ required: true }}
           placeholder="10 days"
           className="bg-[#F8F9FB] border-none "
          />
        </ModalBody>
        <CustomButton
          variant="primary"
          label="Submit"
          className="w-[129px] h-10 rounded-lg text-xs font-Nunito font-bold mx-auto mt-3"
          size="lg"
        />
      </form>
    </DialogContent>
  );
};
