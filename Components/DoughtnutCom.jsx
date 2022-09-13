// Imports
import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'


// Chart Register
ChartJS.register(ArcElement, Tooltip, Legend);


// Data
export const data = {
  labels: ['المواقف النشطة', 'المواقف المكتملة', 'المواقف المنتهية'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


// Main Function
export function DoughtnutCom() {
  return <Doughnut data={data} backgroundColor='#fff'/>;
}