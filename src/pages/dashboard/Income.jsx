import React from "react";

const incomeEntries = [
  {
    source: "Freelance Web Project",
    category: "Freelance",
    amount: 1200,
    frequency: "Monthly",
    date: "2025-04-01",
  },
  {
    source: "YouTube Monetization",
    category: "YouTube",
    amount: 800,
    frequency: "Monthly",
    date: "2025-04-05",
  },
  {
    source: "Consulting Session",
    category: "Consulting",
    amount: 950,
    frequency: "Monthly",
    date: "2025-04-10",
  },
  {
    source: "Affiliate Earnings",
    category: "Affiliate",
    amount: 670,
    frequency: "Monthly",
    date: "2025-04-12",
  },
  {
    source: "Auditing",
    category: "Auditor",
    amount: 670,
    frequency: "Monthly",
    date: "2025-04-12",
  },
  {
    source: "Personal Business",
    category: "Enterpreneur",
    amount: 670,
    frequency: "Monthly",
    date: "2025-04-12",
  },
  {
    source: "Broker",
    category: "Forex",
    amount: 670,
    frequency: "Monthly",
    date: "2025-04-12",
  },
  {
    source: "Car dealings",
    category: "Car",
    amount: 670,
    frequency: "Monthly",
    date: "2025-04-12",
  },
];

const categoryColors = {
  Freelance: "bg-purple-700",
  YouTube: "bg-red-600",
  Consulting: "bg-green-600",
  Affiliate: "bg-blue-600",
  Auditor: "bg-violet-800",
  Enterpreneur: "bg-red-400",
  Forex: "bg-green-500",
  Car: "bg-yellow-500",
};

export default function Income() {
  const totalIncome = incomeEntries.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-10 bg-[#b5a7a7] text-white h-screen overflow-y-auto ">
     

     <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-3xl font-bold">Income Overview</h1>
        <div className="flex space-x-2">
          <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">+</span> NEW INCOME
          </button>
          <button className="bg-gray-700 text-white px-2 py-2 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      


      {/* Summary Box */}
      <div className="bg-[#1f1f1f] border border-gray-700 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-400">Total Income for April</p>
        <p className="text-2xl font-semibold mt-1">€{totalIncome.toFixed(2)}</p>
      </div>

      {/* Income Table */}
      <div className="overflow-x-auto border border-gray-700 rounded-lg">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[#1E1E1E]">
            <tr className="text-left">
              <th className="px-6 py-3">Source</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Frequency</th>
              <th className="px-6 py-3">Date Received</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {incomeEntries.map((entry, idx) => (
              <tr key={idx} className="hover:bg-[#222] transition-all">
                <td className="px-6 py-4 font-medium">{entry.source}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-white px-3 py-1 rounded-full text-xs ${categoryColors[entry.category]}`}
                  >
                    {entry.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold">€{entry.amount.toFixed(2)}</td>
                <td className="px-6 py-4">{entry.frequency}</td>
                <td className="px-6 py-4">{new Date(entry.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
