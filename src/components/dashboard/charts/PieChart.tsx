import { CardLayout } from "@/components/shared/CardLayout";
import {
  PieChart as RePieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Subscribe", value: 50, color: "#82ca9d" },
  { name: "Unsubscribe", value: 20, color: "#ffbb28" },
  { name: "Spam Reported", value: 10, color: "#8884d8" },
  { name: "Blacklisted", value: 5, color: "#ff6f61" },
];

const PieChart = () => {
  return (
    <CardLayout>
      <ResponsiveContainer width="100%" height={300}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ name }) => name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </RePieChart>
      </ResponsiveContainer>
    </CardLayout>
  );
};

export default PieChart;
