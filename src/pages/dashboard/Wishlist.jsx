import { useState } from "react";
import { Trash2, Check, Plus, DollarSign, Search, Filter } from "lucide-react";

export default function Wishlist() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "New Laptop",
      amount: 1299.99,
      priority: "High",
      saved: 500,
    },
    { id: 2, name: "Vacation", amount: 2500, priority: "Medium", saved: 1200 },
    {
      id: 3,
      name: "Home Theater System",
      amount: 899.99,
      priority: "Low",
      saved: 300,
    },
    {
      id: 4,
      name: "Designer Bag",
      amount: 2199.99,
      priority: "Medium",
      saved: 850,
    },
    {
      id: 5,
      name: "Skydiving Experience",
      amount: 349.99,
      priority: "High",
      saved: 100,
    },
    {
      id: 6,
      name: "Travel to Japan",
      amount: 3500,
      priority: "High",
      saved: 1750,
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    amount: "",
    priority: "Medium",
    saved: 0,
  });
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("All");

  const handleAddItem = () => {
    if (newItem.name && newItem.amount) {
      setItems([
        ...items,
        {
          id: items.length + 1,
          name: newItem.name,
          amount: parseFloat(newItem.amount),
          priority: newItem.priority,
          saved: parseFloat(newItem.saved || 0),
        },
      ]);
      setNewItem({ name: "", amount: "", priority: "Medium", saved: 0 });
      setIsAdding(false);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-pink-600";
      case "Medium":
        return "bg-purple-600";
      case "Low":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  const calculateProgress = (saved, amount) => {
    return (saved / amount) * 100;
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPriority =
      priorityFilter === "All" || item.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="p-10 bg-[#a89b9b] text-white h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">WISHLIST</h1>

        <div className="flex items-center space-x-3">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black text-white pl-9 pr-4 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-black text-white px-3 py-2 rounded-md flex items-center"
            >
              <Filter size={16} className="mr-1" />
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

          {/* Add Item Button */}
          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Plus size={18} className="mr-1" /> Add Item
            </button>
          )}
        </div>
      </div>

      {isAdding && (
        <div className="bg-black  p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-400 mb-1">Item Name</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="w-full bg-gray-700 rounded-md px-3 py-2 text-white"
                placeholder="Enter item name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Amount</label>
              <div className="relative">
                <DollarSign
                  size={16}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="number"
                  value={newItem.amount}
                  onChange={(e) =>
                    setNewItem({ ...newItem, amount: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-md pl-8 pr-3 py-2 text-white"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Priority</label>
              <select
                value={newItem.priority}
                onChange={(e) =>
                  setNewItem({ ...newItem, priority: e.target.value })
                }
                className="w-full bg-gray-700 rounded-md px-3 py-2 text-white"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Saved Amount</label>
              <div className="relative">
                <DollarSign
                  size={16}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="number"
                  value={newItem.saved}
                  onChange={(e) =>
                    setNewItem({ ...newItem, saved: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-md pl-8 pr-3 py-2 text-white"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsAdding(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleAddItem}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Check size={18} className="mr-1" /> Save
            </button>
          </div>
        </div>
      )}

      <div className="bg-black rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm uppercase border-b border-gray-700">
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Progress</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-700">
                  <td className="px-4 py-4">
                    <div className="font-medium">{item.name}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`${getPriorityColor(
                        item.priority
                      )} text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-gray-300">
                      ${item.amount.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Saved: ${item.saved.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-4 w-1/4">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="text-xs font-semibold text-gray-400">
                          {calculateProgress(item.saved, item.amount).toFixed(
                            0
                          )}
                          %
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                        <div
                          style={{
                            width: `${calculateProgress(
                              item.saved,
                              item.amount
                            )}%`,
                          }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getPriorityColor(
                            item.priority
                          )}`}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                  No items found that match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
