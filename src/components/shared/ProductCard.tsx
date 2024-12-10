import { Link } from "react-router-dom";
import { CardLayout } from "./CardLayout";
import { FC } from "react";

type ProductCardProps = {
  className?: string;
  icon?: FC<React.ComponentProps<"svg">>;
  title: string;
  to?: string;
  bgColor?: string;
};

export const ProductCard = ({
  className,
  title,
  icon: Icon,
  to,
  bgColor,
}: ProductCardProps) => {
  return (
    <CardLayout
      className={`${className}  "py-5 px-3 w-full"`}
      bgColor={bgColor}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-7 text-white">
          {Icon && <Icon className="size-10" />}
          <h2 className="text-base text-white">{title}</h2>
        </div>
        <Link to={`${to}`} className="text-base text-white font-bold">
          Click Here
        </Link>
      </div>
    </CardLayout>
  );
};
