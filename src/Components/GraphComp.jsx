import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { dataset } from './basicDataset'; 

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  
    const labels = dataset.map(item => item.day);
    const dataValues = dataset.map(item => item.data);

    const data = {
        labels: labels, 
        datasets: [
        {
            label: 'Sales ($)',
            data: dataValues, 
            borderColor: '#525D77',
            backgroundColor: "blue",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0
        },
        ],
    };

    const options = {
        scales: {
        y: {
            beginAtZero: false,
            ticks: {
            stepSize: 100000, 
            },
            grid: {
            borderColor: 'rgba(0,0,0,0)',
            }
        },
        x: {
            grid: {
                display: false
            }
        }
        },
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        },
    };

    return <Line data={data} options={options} />;
};

export default Chart;
