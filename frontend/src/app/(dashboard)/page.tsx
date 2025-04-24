'use client'

import {
  FcSalesPerformance,
  FcMoneyTransfer,
  FcAreaChart,
  FcPositiveDynamic,
  FcConferenceCall,
  FcBusinessman,
  FcBullish
} from "react-icons/fc";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const summaryData = [
  {
    title: "Total Sales",
    icon: <FcSalesPerformance size={32} />,
    total: "$12,000",
    comparison: "+12% from last month",
  },
  {
    title: "Revenue",
    icon: <FcMoneyTransfer size={32} />,
    total: "$18,500",
    comparison: "+8% from last week",
  },
  {
    title: "New Users",
    icon: <FcPositiveDynamic size={32} />,
    total: "320",
    comparison: "+20% from last month",
  },
  {
    title: "Active Sessions",
    icon: <FcAreaChart size={32} />,
    total: "1,200",
    comparison: "+5% this week",
  },
];

const inventoryStats = {
  totalProducts: 1200,
  lowStock: 24,
  outOfStock: 8,
};

const pieData = [
  { name: "Online", value: 600 },
  { name: "In-Store", value: 300 },
  { name: "Partners", value: 100 },
];

const loyaltyData = [
  { name: "Gold", value: 300 },
  { name: "Silver", value: 500 },
  { name: "Bronze", value: 400 },
];

const barData = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 300 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 700 },
  { name: "Fri", sales: 600 },
];

const trendData = [
  { month: "Jan", revenue: 3000 },
  { month: "Feb", revenue: 4500 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 6200 },
];

const recentTransactions = [
  { id: 1, name: "John Doe", item: "iPhone 15", amount: "$999", date: "2025-04-15" },
  { id: 2, name: "Jane Smith", item: "MacBook Air", amount: "$1,299", date: "2025-04-14" },
  { id: 3, name: "Alice Brown", item: "Galaxy S24", amount: "$899", date: "2025-04-13" },
];

const inventoryData = [
  { id: 1, product: "iPhone 15", stock: 35, status: "In Stock" },
  { id: 2, product: "MacBook Air", stock: 12, status: "Low Stock" },
  { id: 3, product: "Galaxy S24", stock: 0, status: "Out of Stock" },
];

const recommendations = [
  "Offer discounts for low-selling items.",
  "Send re-engagement emails to inactive users.",
  "Consider adding a loyalty program.",
  "Analyze high-performing products to promote them more.",
];

export default function EnhancedDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((card, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-2xl p-5 flex items-center space-x-4 hover:shadow-xl transition">
            <div>{card.icon}</div>
            <div>
              <h3 className="text-gray-600 text-sm">{card.title}</h3>
              <p className="text-xl font-semibold">{card.total}</p>
              <p className="text-green-500 text-xs">{card.comparison}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Sales Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Info */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><FcBusinessman /> Inventory Stats</h2>
          <p>Total Products: <strong>{inventoryStats.totalProducts}</strong></p>
          <p>Low Stock Items: <strong className="text-yellow-500">{inventoryStats.lowStock}</strong></p>
          <p>Out of Stock: <strong className="text-red-500">{inventoryStats.outOfStock}</strong></p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><FcConferenceCall /> Customer Loyalty</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={loyaltyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
              >
                {loyaltyData.map((_, index) => (
                  <Cell key={`loyalty-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><FcBullish /> Recommendations</h2>
          <ul className="list-disc pl-5 text-sm">
            {recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
          </ul>
        </div>
      </div> */}

      {/* Revenue Trend */}
      {/* <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div> */}


      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="pb-2">Product</th>
              <th className="pb-2">Stock</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{item.product}</td>
                <td className="py-2">{item.stock}</td>
                <td className="py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-2">Customer</th>
                <th className="pb-2">Item</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(tx => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{tx.name}</td>
                  <td className="py-2">{tx.item}</td>
                  <td className="py-2">{tx.amount}</td>
                  <td className="py-2">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      {/* <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Business Recommendations</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          {recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      </div> */}

    </div>
  );
}





// import { BarChartComponent } from "@/components/BarChartComponent";
// import { PieChartComponent } from "@/components/PieChartComponent";
// import SummaryCardComponents from "@/components/SummaryCardComponents";
// import { FcSalesPerformance } from "react-icons/fc";


// export default function Home() {
//   return (
//     <div>

//       <div className="flex justify-evenly items-center">
//         <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
//         <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
//         <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
//         <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
//       </div>
//       <div className="flex justify-center items-center">
//         <PieChartComponent />
//         <BarChartComponent />
//       </div>
//     </div>
//   );
