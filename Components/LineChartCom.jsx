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
      text: 'Income in current month',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      Number:10000
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '$100000',
      data:labels.map(() => Math.floor(Math.random() * 100000)),
      borderColor: '#6691fc',
      backgroundColor: '#6691fc',
      yAxisID: 'y',
    }
  ],
};

export function LineChartCom() {
  return <Line options={options} data={data} />;
}
