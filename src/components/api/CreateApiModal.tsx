import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";
import { CustomSelect } from "../shared/ControlledSelect";
import { toast } from "sonner";
import { useApiToken } from "@/api/crud/apiToken";

const fields: Field[] = [
  {
    name: "validity",
    type: "text",
  },
];

const showList = [
  { value: "10", label: "10 days" },
  { value: "30", label: "30 days" },
  { value: "60", label: "60 days" },
];

type Props = {
  onClose: any;
};

export const CreateApiModal = ({ onClose }: Props) => {
  const { control, handleSubmit } = useDynamicForm(fields, {});

  const { getApiToken, generateApiToken } = useApiToken();
  const { refetch } = getApiToken();

  const { mutate: generateToken, isPending: isGenerating } = generateApiToken;

  const handleGenerateToken = async () => {
    try {
      await generateToken({} as FormData, {
        onSuccess(response: any) {
          console.log(response);
          toast.success(response?.message);
          refetch();
          onClose();
        },
        onError(error: any) {
          console.log(error);
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while generating the token.");
    }
  };

  return (
    <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
      <ModalHeader title="Select token validity time" icon={X} />
      <form onSubmit={handleSubmit(handleGenerateToken)}>
        <ModalBody className="border-t border-b py-5">
          <CustomSelect
            name="validity"
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
          isLoading={isGenerating}
          type="submit"
        />
      </form>
    </DialogContent>
  );
};
