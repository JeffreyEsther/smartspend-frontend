import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Feather icons - minimalist
import { FiFilter } from "react-icons/fi";

const Budget = () => {
  const [formData, setFormData] = useState({
    category: "",
    type: "Income",
    description: "",
    amount: "",
    startDate: "",
    endDate: "",
    recurring: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  

  const budgetEntries = [
    {
      category: "Travel",
      type: "Expense",
      description: "Flight to New York",
      amount: "500",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
    {
      category: "Food",
      type: "Expense",
      description: "Monthly groceries",
      amount: "200",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
    {
      category: "Salary",
      type: "Income",
      description: "January Salary",
      amount: "3000",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    },
    // Add more entries as needed
  ];

  const [priorityFilter, setPriorityFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  
  const filteredEntries = budgetEntries.filter((entry) => {
    const matchesSearch = entry.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  
    // You can remove this if you don't have priorities in the data
    const matchesPriority = priorityFilter === "All";
  
    return matchesSearch && matchesPriority;
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Budget Data:", formData);
    // Add logic to save the budget data
  };

  return (
    <section className="p-10 bg-[#8d7f7f] text-white h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-bold">NEW BUDGET</h1>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-black text-white px-3 py-2 rounded-md flex items-center"
            >
              <FiFilter size={16} className="mr-1" />
              <span className="hidden sm:inline">{priorityFilter}</span>
            </button>

            {filterOpen && (
              <div className="absolute right-0 sm:left-auto left-0 mt-2 w-40 bg-black rounded-md shadow-lg z-20">
                <ul className="py-1">
                  {["All", "High", "Medium", "Low"].map((priority) => (
                    <li key={priority}>
                      <button
                        onClick={() => {
                          setPriorityFilter(priority);
                          setFilterOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${
                          priorityFilter === priority ? "bg-gray-700" : ""
                        }`}
                      >
                        {priority}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-7 bg-[#131111]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category */}
          <div>
            <label className="text-gray-200 text-sm uppercase block mb-2">
              Category*
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white text-black p-3 rounded-lg focus:outline-none"
              placeholder="e.g., Travel, Food, Office"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-gray-200 text-sm uppercase block mb-2">
              Type*
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Income"
                  checked={formData.type === "Income"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 mr-2 ${
                    formData.type === "Income"
                      ? "border-teal-500 bg-teal-500"
                      : "border-gray-500"
                  }`}
                ></span>
                <span className="text-white">Income</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Expense"
                  checked={formData.type === "Expense"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 mr-2 ${
                    formData.type === "Expense"
                      ? "border-teal-500 bg-teal-500"
                      : "border-gray-500"
                  }`}
                ></span>
                <span className="text-white">Expense</span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-200 text-sm uppercase block mb-2">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-white text-black p-3 rounded-lg focus:outline-none"
              placeholder="e.g., Monthly budget for office supplies"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Budget Details */}
          <div>
            <h2 className="text-white text-lg font-semibold uppercase mb-4">
              Budget Details
            </h2>
            <div className="space-y-4">
              {/* Amount */}
              <div>
                <label className="text-gray-200 text-sm uppercase block mb-2">
                  Amount*
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full bg-white text-black p-3 rounded-lg focus:outline-none"
                  placeholder="e.g., 500.00"
                  required
                />
              </div>

              {/* Start Date */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="text-gray-200 text-sm uppercase block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full bg-white text-black p-3 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-200 text-sm uppercase block mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full bg-white text-black p-3 rounded-lg focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Recurring */}
          <div>
            <h2 className="text-white text-lg font-semibold uppercase mb-4">
              Recurring
            </h2>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="recurring"
                  checked={formData.recurring}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded border-2 mr-2 ${
                    formData.recurring
                      ? "border-teal-500 bg-teal-500"
                      : "border-gray-500"
                  }`}
                ></span>
                <span className="text-white">Recurring</span>
              </label>
            </div>
          </div>

           {/* Display Filtered Entries */}
        <div className="mt-6">
          <h2 className="text-white text-lg font-semibold">Budget Entries</h2>
          <ul className="space-y-2">
            {filteredEntries.map((entry, index) => (
              <li key={index} className="bg-white p-3 rounded-lg">
                <p className="text-sm text-black">
                  {entry.category} - {entry.description} - {entry.amount} €
                </p>
              </li>
            ))}
          </ul>
        </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-teal-500 text-white px-4 py-2 rounded"
              onClick={() => console.log("Save as draft:", formData)}
            >
              Save draft
            </button>
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>

       
      </div>
    </section>
  );
};

export default Budget;
