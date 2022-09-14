import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Outcome in current week',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      Number:150
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '$25000',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: '#fac032',
      backgroundColor: '#fac032',
      yAxisID: 'y',
    }
  ],
};

export function LineChartComTwo() {
  return <Line options={options} data={data} />;
}
