import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import ControlledInput from "../shared/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

export const InviteeModal = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
      <ModalHeader title="Invite Collaborators" icon={X} />
      <form  onSubmit={handleSubmit(onSubmit)}>
        <ModalBody className="border-t border-b py-5 space-y-7">
          <ControlledInput
            name="name"
            control={control}
            placeholder="Enter Your Full Name"
            type="text"
            label="Full Name"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder="Enter Your Email"
            type="text"
            label="Email"
            variant="primary"
            rules={{ required: true }}
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
