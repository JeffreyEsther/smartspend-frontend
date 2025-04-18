import { useState } from 'react';

const AddIncome = () => {
  const [formData, setFormData] = useState({
    subject: '',
    source: '',
    date: '',
    amount: '',
    currency: 'USD',
    recurring: false,
    category: '',
    description: '',
    account: '',
    addToReport: 'Yes'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Income data submitted:', formData);
  };

  const handleDraft = () => {
    // Save draft logic here
    console.log('Draft saved:', formData);
  };

  return (
    <div className="min-h-screen bg-[#251775] text-white p-4 w-full mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">New income</h1>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="subject" className="block text-white text-sm mb-1">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              />
            </div>
            
            <div>
              <label htmlFor="source" className="block text-white text-sm mb-1">Source*</label>
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
              <label htmlFor="date" className="block text-white text-sm mb-1">Date*</label>
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
                <label htmlFor="amount" className="block text-white  text-sm mb-1">Amount*</label>
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
              <div className="w-20 md:w-24">
                <label className="block invisible text-sm mb-1">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full bg-pink-700 border border-gray-700 rounded p-2 text-white"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recurring"
                name="recurring"
                checked={formData.recurring}
                onChange={handleChange}
                className="mr-2 h-4 w-4 bg-gray-700"
              />
              <label htmlFor="recurring" className="text-sm text-white">Recurring</label>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-white text-sm mb-1">Category*</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              >
                <option value="" disabled>Type</option>
                <option value="salary">Salary</option>
                <option value="freelance">Freelance</option>
                <option value="investment">Investment</option>
                <option value="rental">Rental</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-white text-sm mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black h-20 md:h-24"
              />
            </div>
            
            <div>
              <label htmlFor="account" className="block text-white text-sm mb-1">Account*</label>
              <input
                type="text"
                id="account"
                name="account"
                value={formData.account}
                onChange={handleChange}
                className="w-full bg-white rounded p-2 text-black"
                required
              />
            </div>
            
            <div>
              <p className="text-white text-sm mb-2">Add to report</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="reportYes"
                    name="addToReport"
                    value="Yes"
                    checked={formData.addToReport === 'Yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="reportYes" className="text-sm">Yes</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="reportNo"
                    name="addToReport"
                    value="No"
                    checked={formData.addToReport === 'No'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="reportNo" className="text-sm">No</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 mt-6 lg:mt-0">
            <div className="border border-white rounded flex flex-col justify-center items-center w-full h-48 md:h-64">
              <div className="text-3xl text-white mb-2">+</div>
              <p className="text-white text-sm">Upload an invoice</p>
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