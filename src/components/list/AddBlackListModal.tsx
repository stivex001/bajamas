import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import ControlledInput from "../shared/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";
import { useBlackList } from "@/api/crud/blackList";
import { toast } from "sonner";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

type BlackListedModalProps = {
  onClose: any;
  open: boolean;
};

export const AddBlackListModal = ({ open, onClose }: BlackListedModalProps) => {
  const { control, handleSubmit, formState } = useDynamicForm(fields, {});

  const { isValid } = formState;
  const { createBlacklist, getBlackList } = useBlackList();

  const { isPending, mutate } = createBlacklist;
  const { refetch } = getBlackList();

  const onSubmit = async (data: any) => {
    try {
      await mutate(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          toast.success(response?.message);
          refetch();
          onClose();
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
          <ModalHeader title="Add to blacklist" icon={X} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody className="border-t border-b py-5">
              <ControlledInput
                name="email"
                control={control}
                placeholder="Enter Your Email"
                type="email"
                label="Name"
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
