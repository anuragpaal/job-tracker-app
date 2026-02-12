import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "Jan", hires: 2 },
  { name: "Feb", hires: 5 },
  { name: "Mar", hires: 3 },
  { name: "Apr", hires: 6 },
];

const pieData = [
  { name: "Applied", value: 10 },
  { name: "Interview", value: 5 },
  { name: "Hired", value: 3 },
];

const COLORS = ["#3B82F6", "#F59E0B", "#10B981"];

export default function Charts() {
  return (
    <div className="grid grid-cols-2 gap-10">
      {/* BAR CHART */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">Monthly Hires</h3>

        <BarChart width={400} height={250} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hires" fill="#3B82F6" />
        </BarChart>
      </div>

      {/* PIE CHART */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">Pipeline Ratio</h3>

        <PieChart width={400} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieData.map((entry, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>

          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
