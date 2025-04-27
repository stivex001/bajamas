import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useSubscribers } from "@/api/crud/subscribers";
import CustomButton from "../shared/CustomButton";

const BlacklistSubscriberModal = ({
  setBlackListModal,
  selectedRow,
  refetch,
}: {
  setBlackListModal: (value: boolean) => void;
  selectedRow: any;
  refetch: () => void;
}) => {
  const { blacklistSubscriber } = useSubscribers();
  const { mutate: blacklistSub, isPending } = blacklistSubscriber;

  const handleDeleteSubscriber = async () => {
    const formdata = new FormData();
    formdata.append("email", selectedRow?.email);
    try {
      await blacklistSub(formdata, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          toast.success(response?.message);
          refetch();
          setBlackListModal(false);
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
    <div className="">
      <AlertCircle className="text-red-700 mx-auto " />
      <p className="text-grey text-sm text-center my-2">
        BlackList {selectedRow?.fname} {selectedRow?.lname} Permanently!
      </p>
      <div className="flex gap-3 justify-between w-1/2 mx-auto items-center mt-4">
        <Button
          onClick={() => setBlackListModal(false)}
          className="bg-fadedWhite border border-borderColor rounded-[8px] hover:text-white text-black sm:w-[40%]"
        >
          Cancel
        </Button>
        <CustomButton
          onClick={handleDeleteSubscriber}
          label="Blacklist"
          isLoading={isPending}
          variant="danger"
          className="text-white sm:w-[40%] rounded-lg h-10"
        />
      </div>
    </div>
  );
};

export default BlacklistSubscriberModal;
