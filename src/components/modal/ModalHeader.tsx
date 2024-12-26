import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type ModalHeaderProps = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const ModalHeader = ({
  title,
  icon: Icon,
}: ModalHeaderProps) => {
  return (
    <div className="bg-white sticky top-0 z-10 flex items-center justify-between">
      <h1 className="text-xl font-bold text-darker font-Nunito">{title}</h1>
      <DialogPrimitive.Close className="  ">
        {Icon && <Icon className="h-5 w-5 font-semibold " />}
      </DialogPrimitive.Close>
    </div>
  );
};
