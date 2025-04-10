import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function ReportChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Crime Reports',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  });

  useEffect(() => {
    // Fetching data from the API endpoint
    axios.get('https://www.dci.go.ke/api/crime_reports/stats') // To be replace with actual endpoint
      .then(response => {
        const data = response.data;
        setChartData({
          labels: data.map(item => item.region),
          datasets: [{
            label: 'Crime Reports by Region',
            data: data.map(item => item.count),
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
          }]
        });
      })
      .catch(error => {
        console.error("Error fetching crime data:", error);
      });
  }, []);

  return (
    <div className="chart-container">
      <h2>Crime Report Statistics</h2>
      <Bar 
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
}

export default ReportChart;