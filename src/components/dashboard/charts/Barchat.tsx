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

const data = [
  { month: "11/2022", subscribers: 30 },
  { month: "12/2022", subscribers: 50 },
  { month: "13/2022", subscribers: 130 },
  { month: "14/2022", subscribers: 70 },
  { month: "15/2022", subscribers: 310 },
  { month: "16/2022", subscribers: 100 },
  { month: "17/2022", subscribers: 200 },
];

const Barchart = () => {
  return (
    <CardLayout>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          className=""
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="subscribers" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-3">
        <div className="w-2 h-2 bg-[#528E52]" />
        <h2 className=" text-[#000000B2] text-xs">
          Subscribers Growth Chart
        </h2>
      </div>
    </CardLayout>
  );
};

export default Barchart;
