import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const teamSpendingData = [
  { name: "Jan", spending: 4000 },
  { name: "Feb", spending: 3000 },
  { name: "Mar", spending: 2000 },
  { name: "Apr", spending: 2780 },
  { name: "May", spending: 1890 },
];

const dayToDayExpensesData = [
  { name: "Accommodation", amount: 300 },
  { name: "Canteen", amount: 150 },
  { name: "Services", amount: 200 },
  { name: "Fuel", amount: 100 },
];

const Overview = () => {
  return (
    <div className="p-10 bg-[#ac9f9f] text-white h-screen overflow-y-auto">
      {/* Top section: Pending Tasks and Recent Expenses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Pending Tasks */}
        <div className="bg-[#1e1e1e] rounded-xl p-4 shadow-md">
          <h3 className="font-bold mb-4">Pending Tasks</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-purple-400">Pending Approvals</span>
              <span className="font-semibold">5</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-purple-400">New Trips Registered</span>
              <span className="font-semibold">1</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-purple-400">Unreported Expenses</span>
              <span className="font-semibold">4</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-purple-400">Upcoming Expenses</span>
              <span className="font-semibold">0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-purple-400">Unreported Advances</span>
              <span className="font-semibold">€0.00</span>
            </li>
          </ul>
        </div>

        {/* Recent Expenses */}
        <div className="bg-[#1e1e1e] rounded-xl p-4 shadow-md">
          <h3 className="font-bold mb-4">Recent Expenses</h3>
          <div className="text-sm grid grid-cols-5 gap-2 font-semibold text-gray-300">
            <span>Subject</span>
            <span>Employee</span>
            <span>Team</span>
            <span>Amount</span>
          </div>
          <div className="mt-2 space-y-2 text-sm">
            {[
              ["Office Supplies", "John Smith", "Marketing", "€150.00"],
              ["Business Lunch", "Sarah Jade", "Sales", "€75.50"],
              ["Travel Expenses", "Mike Brown", "Operations", "€450.25"],
              ["Client Dinner", "Jennifer Lee", "Marketing", "€120.00"],
              ["Hotel", "David Wilson", "Finance", "€275.75"],
            ].map(([subject, emp, team, amt], i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-2 text-white items-center"
              >
                <span>{subject}</span>
                <span>{emp}</span>
                <span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      team === "Marketing"
                        ? "bg-purple-600"
                        : team === "Sales"
                        ? "bg-pink-600"
                        : team === "Operations"
                        ? "bg-red-600"
                        : "bg-green-600"
                    }`}
                  >
                    {team}
                  </span>
                </span>
                <span className="col-span-2 font-semibold">{amt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-[#1e1e1e] rounded-xl p-4 shadow-md mb-6">
        <h3 className="font-bold mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["+ New expense", "bg-pink-700"],
            ["+ Add receipt", "bg-indigo-700"],
            ["+ Create report", "bg-emerald-700"],
            ["+ Create trip", "bg-rose-700"],
          ].map(([label, color], i) => (
            <button
              key={i}
              className={`w-full py-3 rounded-lg text-white font-semibold ${color}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Monthly Report */}
      <div className="bg-[#1e1e1e] rounded-xl p-4 shadow-md">
        <h3 className="font-bold mb-4">Monthly Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#121212] rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Team Spending Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={teamSpendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="spending" fill="#82ca9d" />
                
                
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-[#121212] rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Day-to-Day Expenses</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dayToDayExpensesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
