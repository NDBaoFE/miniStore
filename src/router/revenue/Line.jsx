
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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: [0, 10, 5, 2, 20, 30, 45],
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(4, 209, 130, 0.2)',
        borderColor: 'rgb(4, 209, 130)',
      },
      {
        label: 'Cost',
        data: [0, 20, 10, 30, 15, 40, 20],
        tension: 0.6,
        fill: true,
        backgroundColor: 'rgba(44, 120, 220, 0.2)',
       borderColor: 'rgba(44, 120, 220)',
      },
    ],
  };
function LineChart() {

  return (
    <StyledLine options={options} data={data}  style={{marginTop:"30px"}}/>
  )
}

export default LineChart