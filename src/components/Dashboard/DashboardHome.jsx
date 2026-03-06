import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 700 },
  { name: "Jun", sales: 450 },
];

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-orange-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Coffees</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">350</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$8,500</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Monthly Coffee Sales</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3">
          <li className="border-b pb-2">☕ New Coffee Added</li>
          <li className="border-b pb-2">🛒 New Order Received</li>
          <li className="border-b pb-2">👤 New User Registered</li>
          <li className="border-b pb-2">⭐ Customer Review Added</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
