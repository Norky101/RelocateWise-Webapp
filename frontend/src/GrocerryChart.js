import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GroceryChart = ({ onDataSend }) => {
  // Data for the chart
  const data = {
    labels: [
      'Fruits & Vegetables',
      'Grains & Pasta',
      'Protein Sources',
      'Dairy & Alternatives',
      'Snacks & Misc',
    ],
    datasets: [
      {
        label: 'Average Weekly Cost ($)',
        data: [30, 15, 25, 20, 10], // Corresponding to the average costs
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // State for form inputs
  const [formData, setFormData] = useState({
    internationalStudent: true,
    location: 'Miami',
    moreUserInfo: true,
    university: 'Florida International University',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    onDataSend(formData, data);
    // Here you can add code to handle the form submission
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-center text-black">Cost Breakdown</h2>
    <h3 className="text-xl font-semibold mb-4 text-center text-black">User Information Form</h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center">
        <label className="mr-2 text-black">International Student:</label>
        <input
          type="checkbox"
          name="internationalStudent"
          checked={formData.internationalStudent}
          onChange={handleChange}
          className="h-5 w-5"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-black">Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="Enter your location"
        />
      </div>
      <div className="flex items-center">
        <label className="block text-sm font-medium mb-1 text-black">More Info</label>
        <input
          type="text"
          name="moreUserInfo"
          checked={formData.moreUserInfo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="Information about you"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-black">University:</label>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="Enter your university"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form> 
  </div>
  );
};

export default GroceryChart;