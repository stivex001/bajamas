import { CardLayout } from "@/components/shared/CardLayout";
import {
  PieChart as RePieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Label + color mapping
const chartMeta = {
  subscribers: { name: "Subscribe", color: "#82ca9d" },
  unsubscribe: { name: "Unsubscribe", color: "#ffbb28" },
  spam_reported: { name: "Spam Reported", color: "#00C49F" },
  blacklisted: { name: "Blacklisted", color: "#ff6f61" },
};

// const renderCustomLabel = ({ name, value, x, y, cx, cy }) => {
//   const RADIAN = Math.PI / 180;
//   const radius = 80;
//   const angle = Math.atan2(y - cy, x - cx);
//   const labelX = cx + radius * Math.cos(angle);
//   const labelY = cy + radius * Math.sin(angle);

//   return (
//     <text
//       x={labelX}
//       y={labelY}
//       fill="white"
//       textAnchor="middle"
//       dominantBaseline="central"
//       fontSize={12}
//       fontWeight={500}
//     >
//       {`${name}\n${value}`}
//     </text>
//   );
// };

const PieChart = ({ countList }: any) => {
  const data = Object.entries(countList || {}).map(([key, value]) => ({
    name: chartMeta[key as keyof typeof chartMeta]?.name || key,
    value,
    color: chartMeta[key as keyof typeof chartMeta]?.color || "#ccc",
  }));

  return (
    <CardLayout>
      <div className="flex items-center justify-between w-full">
        {/* Pie Chart */}
        <div className="w-2/3 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                // label={renderCustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend */}
        <div className="w-1/3 flex flex-col gap-2">
          {data?.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry?.color }}
              />
              <span className="text-sm text-gray-700">{entry?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </CardLayout>
  );
};

export default PieChart;
