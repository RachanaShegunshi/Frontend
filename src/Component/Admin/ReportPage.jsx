import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ReportPage.css';
import Admin from './Admin'

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportPage = () => {
  // Sample sales data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Sales',
        data: [12000, 15000, 10000, 18000, 20000, 22000, 25000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Admin>
    <div className="report-page">
      <h1>Sales Report</h1>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
    </Admin>
  );
};

export default ReportPage;
