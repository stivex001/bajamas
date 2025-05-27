import { cn } from "@/lib/utils";
import checkmark from "@/assets/images/check.png";
import CustomButton from "../shared/CustomButton";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
  open: boolean;
  toggle: (state: boolean) => void;
  url: string;
  content: string;
  refetch: any;
};

export const SuccesModal = ({
  className,
  open,
  toggle,
  url,
  content,
  refetch,
}: Props) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(url);
    toggle(false);
    refetch();
  };

  return (
    <>
      <div
        className={cn(
          " absolute z-[999] bg-white rounded-[15px] flex flex-col items-center justify-center  w-[350px] h-[400px] lg:w-[600px] lg:h-[500px] mx-auto",
          className
        )}
      >
        <div className="w-[232px] ">
          <img src={checkmark} alt="icon" />
        </div>
        <h1 className="font-semibold text-2xl text-primary">All set!</h1>
        <p className="text-base text-primary">{content}</p>
        <div className="flex justify-center lg:justify-end mt-12">
          <CustomButton
            label="Done"
            variant="primary"
            className="w-[144px] h-[44px] rounded-[10px] text-sm font-semibold"
            size="lg"
            type="button"
            onClick={handleConfirm}
          />
        </div>
      </div>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50"></div>
      )}
    </>
  );
};
