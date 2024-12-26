

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ModalBodyType = {
  className?: string;
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
};

const sizeClasses = {
  xs: "max-w-sm",
  sm: "w-56",
  md: "w-[25rem]",
  lg: "w-[30rem]",
  xl: "w-[40rem]",
  "2xl": "w-[50rem] ",
  "3xl": "w-[64rem]",
  full: "w-full",
};



export const ModalBody: React.FC<ModalBodyType> = ({
  children,
  className,
  size = "full",
}) => {
  return (
    <section className={cn(" bg-white overflow-y-auto scrollbar-hidden  max-h-[75vh] ", sizeClasses[size], className)}>
      {children}
    </section>
  );
};


