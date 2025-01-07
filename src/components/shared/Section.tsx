import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Section = ({ children }: Props) => {
  return <main className="flex flex-col gap-7">{children}</main>;
};

export default Section;
