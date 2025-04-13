import { useDashboard } from "@/api/crud/dashboard";
import { MetricsIcon } from "@/assets/svgs/MenuIcon";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartMeta = {
  subscribers: { name: "Subscribers", color: "#2f855a" },
  unsubscribe: { name: "Unsubscribed", color: "#ffbb28" },
  spam_reported: { name: "Report", color: "#00C49F" },
  blacklisted: { name: "Failed", color: "#ff6f61" },
};

const Metrics = () => {
  const { getDashboardList } = useDashboard();
  const { data: dlist } = getDashboardList();
  const countList = dlist?.data;

  const data = Object.entries(countList || {}).map(([key, value]) => ({
    name: chartMeta[key as keyof typeof chartMeta]?.name || key,
    value: typeof value === "number" ? value : 0,
  }));

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-4">
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
          <Tooltip
            formatter={(value: number) => [`${value}`, "Count"]}
            labelFormatter={(label) => `${label}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2f855a"
            fill="#2f855a"
            fillOpacity={0.2}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2f855a"
            strokeWidth={2}
            dot={{ r: 5, strokeWidth: 2, stroke: "#2f855a", fill: "#fff" }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Metrics;
