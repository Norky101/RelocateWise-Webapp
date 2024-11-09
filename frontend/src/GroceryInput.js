import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GroceryInput = ({new_data}) => {
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
    activeInGym: true,
    university: 'Florida International University',
  });

  

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Grocery Cost Breakdown</h2>
      <div className="flex justify-center">
        <Bar data={data} options={{
          plugins: {
            legend: {
              labels: {
                color: 'black', // Set legend text color to black
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'black', // Set x-axis ticks to black
              },
            },
            y: {
              ticks: {
                color: 'black', // Set y-axis ticks to black
              },
            },
          },
        }} />
      </div>
    </div>
  );
};

export default GroceryInput;