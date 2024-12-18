
import { Progress } from "@/components/ui/progress";

type Props = {
  desc: string;
  count: number;
};

export const Progressbar = ({ desc, count }: Props) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <p className="text-xs text-black">{desc}</p>
        <p className="text-xs text-black">{count}%</p>
      </div>
      <Progress value={count} className="w-full" />
    </div>
  );
};
