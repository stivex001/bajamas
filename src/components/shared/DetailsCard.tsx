import { Link } from "react-router-dom";
import { CardLayout } from "./CardLayout";
import { FC } from "react";

type DetailCardProps = {
  className?: string;
  icon?: FC<React.ComponentProps<"svg">>;
  title: string;
  amount?: string;
  link?: string;
  link2?: string;
  to?: string;
  to2?: string;
};

export const DetailsCard = ({
  className,
  icon: Icon,
  title,
  amount,
  link,
  link2,
  to,
  to2,
}: DetailCardProps) => {
  return (
    <CardLayout className="py-5 px-3 w-full">
      <div className="flex gap-3 w-full h-full">
        <div
          className={`${className} w-[35%] flex items-center justify-center rounded-md`}
        >
          {Icon && <Icon className="size-10" />}
        </div>
        <div className="w-[65%] flex flex-col gap-2">
          <h2 className="text-base text-[#212529]">{title}</h2>
          <p className="text-base font-bold text-[#28a745]">{amount}</p>
          <Link
            to={`${to}`}
            className="flex justify-end lg:justify-start text-sm text-primary"
          >
            {link}
          </Link>
          <Link to={`${to2}`} className="text-sm text-primary">
            {link2}
          </Link>
        </div>
      </div>
    </CardLayout>
  );
};
