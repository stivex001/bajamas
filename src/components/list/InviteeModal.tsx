import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import ControlledInput from "../shared/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";
import { useCollaborator } from "@/api/crud/collaboration";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "name",
    type: "text",
    errorMessage: "Fullname is required",
    isRequired: true,
  },
];

type AddInviteeModalProps = {
  onClose: any;
  open: boolean;
};

export const InviteeModal = ({ open, onClose }: AddInviteeModalProps) => {
  const { control, handleSubmit, formState } = useDynamicForm(fields, {});

  const { isValid } = formState;

  const { inviteUser, getCollaboratorList } = useCollaborator();

  const { isPending, mutate } = inviteUser;
  const { refetch } = getCollaboratorList();

  const onSubmit = async (data: any) => {
    try {
      await mutate(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          if (response?.status === true) {
            toast.success(response?.message);
            refetch();
            onClose();
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
    <>
      {open && (
        <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
          <ModalHeader title="Invite Collaborators" icon={X} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody className="border-t border-b py-5 space-y-7">
              <ControlledInput
                name="name"
                control={control}
                placeholder="Enter  Full Name"
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
              isLoading={isPending}
              disabled={!isValid}
              type="submit"
            />
          </form>
        </DialogContent>
      )}
    </>
  );
};
