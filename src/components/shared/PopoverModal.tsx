import { PopoverContent } from "@/components/ui/popover";

type Props = {
  children: React.ReactNode;
};

export const PopoverModal = ({ children }: Props) => {
  return (
    <>
      
      <PopoverContent>{children}</PopoverContent>
    </>
  );
};
