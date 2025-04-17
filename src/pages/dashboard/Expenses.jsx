import React from 'react';

const expensesData = [
  { date: '10/17/2022', details: 'Food catering', merchant: 'McFood', amount: '€250.00', report: 'November_2022', status: 'Not submitted' },
  { date: '10/17/2022', details: 'Office supplies', merchant: 'Offico', amount: '€0.00', report: 'November_2022', status: 'Not submitted' },
  { date: '10/17/2022', details: 'Business lunch', merchant: 'Restaurant', amount: '€71.50', report: 'November_2022', status: 'Not submitted' },
  { date: '10/17/2022', details: 'Travel expenses', merchant: 'Airlines', amount: '€480.25', report: 'November_2022', status: 'Submitted' },
  { date: '10/17/2022', details: 'Client dinner', merchant: 'Bistro', amount: '€120.00', report: 'November_2022', status: 'Not submitted' },
  { date: '10/17/2022', details: 'Hotel', merchant: 'Hotel', amount: '€275.75', report: 'November_2022', status: 'Submitted' },
  { date: '10/17/2022', details: 'News subscription', merchant: 'NewsTimes', amount: '€50.00', report: 'November_2022', status: 'Not submitted' },
];

const Expenses = () => {
  return (
    <div className="p-10 bg-[#a89b9b] text-white h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-3xl font-bold">EXPENSES</h1>
        <div className="flex space-x-2">
          <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">+</span> NEW EXPENSE
          </button>
          <button className="bg-gray-700 text-white px-2 py-2 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 text-gray-800 text-sm font-semibold uppercase mb-2 px-4">
        <div>DETAILS</div>
        <div>MERCHANT</div>
        <div>AMOUNT</div>
        <div>REPORT</div>
        <div>STATUS</div>
      </div>

      {/* Scrollable Table Body */}
      <div className="p-10 bg-[#a39999] text-white h-screen ">
        {expensesData.map((expense, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 items-center bg-black rounded-lg p-4 mb-2 text-white text-sm"
          >
            {/* Details */}
            <div className="flex items-center space-x-3">
              <div className="bg-gray-600 rounded-full p-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"></path>
                </svg>
              </div>
              <div>
                <p>{expense.date}</p>
                <p className="text-gray-300">{expense.details}</p>
              </div>
            </div>

            {/* Merchant */}
            <div>{expense.merchant}</div>

            {/* Amount */}
            <div>{expense.amount}</div>

            {/* Report */}
            <div>{expense.report}</div>

            {/* Status */}
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  expense.status === 'Submitted' ? 'bg-purple-600' : 'bg-pink-600'
                }`}
              >
                {expense.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;