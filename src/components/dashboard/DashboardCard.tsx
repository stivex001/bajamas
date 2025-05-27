import { CardLayout } from "../shared/CardLayout";

type Props = {
  desc: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const DashboardCard = ({ desc, value, icon: Icon }: Props) => {
  return (
    <CardLayout className="rounded-[14px] py-2  ">
      <div className="flex justify-between gap-3">
        <div className="space-y-4">
          <h2 className="text-xs md:text-base font-semibold whitespace-nowrap text-darker font-Nunito">
            {desc}
          </h2>
          <p className="text-sm md:text-[28px] leading-[38px] text-darker font-Nunito font-semibold">
            {value}
          </p>
        </div>
        <Icon />
      </div>
    </CardLayout>
  );
};

export default DashboardCard;
