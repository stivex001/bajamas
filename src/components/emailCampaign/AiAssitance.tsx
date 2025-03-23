import { Check, Copy, X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import ControlledTextAreaInput from "../shared/ControlledTextAreaInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import CustomButton from "../shared/CustomButton";
import { useAi } from "@/api/crud/ai";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const fields: Field[] = [
  {
    name: "message",
    type: "textarea",
    isRequired: true,
  },
];

const AiAssitance = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});
  const [aiResponse, setAiResponse] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse)
      .then(() => {
        setCopied(true);
        toast.success("Response copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy response");
      });
  };


  const { askAi } = useAi();

  const { mutate, isPending } = askAi;

  const onSubmit = async (data: any) => {
    try {
      await mutate(data, {
        onSuccess: (response: any) => {
          console.log(response);
          toast.success(response?.[0]?.message);
          setAiResponse(response[0].ai);
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
      });
    } catch (error) {}
  };

  return (
    <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
      <ModalHeader title="Need Assistance? " icon={X} />
      <div>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledTextAreaInput
              label="Message text"
              name="message"
              control={control}
              placeholder="Write your message text here"
              maxLength={1000}
            />
            {aiResponse && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">AI Response:</h3>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200 text-sm whitespace-pre-wrap">
                  {aiResponse}
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <CustomButton
                label="Send"
                variant="primary"
                className="w-fit h-10 rounded-[5px] font-bold text-sm"
                size="lg"
                type="submit"
                isLoading={isPending}
              />
            </div>
          </form>
        </ModalBody>
      </div>
    </DialogContent>
  );
};

export default AiAssitance;
