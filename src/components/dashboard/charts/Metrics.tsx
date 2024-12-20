import { MetricsIcon } from "@/assets/svgs/MenuIcon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Recipients", value: 0 },
  { name: "Delivered", value: 80 },
  { name: "Failed", value: 160 },
  { name: "Open", value: 240 },
  { name: "Click", value: 300 },
  { name: "Report", value: 350 },
  { name: "Unsubscribed", value: 400 },
];

const Metrics = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2">
        <MetricsIcon />
        <h2 className="text-center text-xs text-[#000000B2]">
          Email marketing metrics of your campaign
        </h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2f855a"
            fill="#68d391"
            strokeWidth={2}
            dot={{ r: 5, strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Metrics;
