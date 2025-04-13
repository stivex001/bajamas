import { useDashboard } from "@/api/crud/dashboard";
import { CardLayout } from "@/components/shared/CardLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const { getSubscriberGrowth } = useDashboard();
  const { data: dlist } = getSubscriberGrowth();

  const countList = dlist?.data?.slice()?.reverse();
  return (
    <CardLayout>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={countList}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          className=""
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-3">
        <div className="w-2 h-2 bg-[#528E52]" />
        <h2 className=" text-[#000000B2] text-xs">Subscribers Growth Chart</h2>
      </div>
    </CardLayout>
  );
};

export default Barchart;
