import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type CustomModalProp = {
  openModalTrigger: string;
  className?: string;
  icon?: string;
  title: string;
  children?: React.ReactNode;
};

export const CustomModal = ({
  openModalTrigger,
  className,
  icon,
  title,
  children,
}: CustomModalProp) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center ${className}`}
        >
          {openModalTrigger}
          {icon && <span className="ml-2">{icon}</span>}
        </DialogTrigger>
        <DialogContent className="max-w-[80%] lg:max-w-[800px]  max-h-[70vh] my-auto scrol">
          <DialogHeader>
            <DialogTitle
              className={`text-base font-bold text-gray2   py-5 ${className}`}
            >
              {title}
            </DialogTitle>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
