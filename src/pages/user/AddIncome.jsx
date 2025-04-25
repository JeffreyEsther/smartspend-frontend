import { useState } from "react";
import { apiAddIncome } from "../../services/income";

const AddIncome = () => {
  const [formData, setFormData] = useState({
    
    source: "",
    date: "",
    amount: "",
    
    category: "",
   
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    try {
      const response = await apiAddIncome(formData);

     
      console.log(response.data);
    } catch (error) {
      console.error(error);
     
    }
  };

  const handleDraft = () => {
    // Save draft logic here
    console.log("Draft saved:", formData);
  };

  return (
    <div className="min-h-screen bg-[#251775] text-white p-4 w-full mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">New income</h1>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="source" className="block text-white text-sm mb-1">
                Source*
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-white text-sm mb-1">
                Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label
                  htmlFor="amount"
                  className="block text-white  text-sm mb-1"
                >
                  Amount*
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full bg-white rounded p-2 text-black"
                  required
                />
              </div>
              
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-white text-sm mb-1"
              >
                Category*
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              >
                <option value="" disabled>
                  Type
                </option>
                <option value="Salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Investments">Investment</option>
                <option value="Rental Income">Rental Income</option>
                <option value="Gifts/Support">Gifts/Support</option>
                <option value="Business">Business</option>
                <option value="Government Benefits">Government Benefits</option>
                <option value="Other">Other</option>
              </select>
            </div>

           
          </div>
        </div>

        <div className="flex justify-end gap-3 md:gap-4 mt-8">
          <button
            type="button"
            onClick={handleDraft}
            className="bg-teal-500 text-white px-3 md:px-4 py-2 rounded text-sm md:text-base"
          >
            Save draft
          </button>
          <button
            type="submit"
            className="bg-pink-700 text-white px-4 md:px-6 py-2 rounded text-sm md:text-base"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIncome;
