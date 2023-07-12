/* eslint-disable react/prop-types */

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

import { StyledLine } from './style';

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
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Revenue and Profit through out this year',
        font: {
            size: 28 // Increase the font size to scale up the title
          }
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
 
function LineChart({data}) {
    console.log(data);
  const tableData = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.monthRevenues[0].revenue,
        fill: true,
        backgroundColor: 'rgba(4, 209, 130, 0.2)',
        borderColor: 'rgb(4, 209, 130)',
      },
      {
        label: 'Cost',
        data: data.monthRevenues[0].cost,
        tension: 0.6,
        fill: true,
        backgroundColor: 'rgba(44, 120, 220, 0.2)',
       borderColor: 'rgba(44, 120, 220)',
      },
    ],
  };
  return (
    <>
    { data && <StyledLine options={options} data={tableData}  style={{marginTop:"30px"}}/>}
    </>
  )
}

export default LineChart