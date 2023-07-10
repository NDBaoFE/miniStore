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
import { StyledModal } from '../EmployeeSchedule/components/style';

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
        text: 'Golden Time analytic',
        font: {
            size: 28 // Increase the font size to scale up the title
          }
      },
    },
  };
  
  const labels = ["01","02" , "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ];
  
 
function DayTimeAnalytic({openAnalytic,setOpenAnalytic,data}) {
     const hours = {
        labels,
        datasets: [
          {
            label: 'Day time Analytics',
            data: data.dayTimeAnalytics,
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(4, 209, 130, 0.2)',
            borderColor: 'rgb(4, 209, 130)',
          },
         
        ],
      };
    const handleCancel = () => {
    setOpenAnalytic(false);
  };
  return (
    <StyledModal
    open={openAnalytic}
    footer={null}
    onCancel={handleCancel}
    centered
    closable={true}
    width={900}
    height={700}
    style={{padding:20}}
  >     
    <StyledLine options={options} data={hours}  style={{marginTop:"30px"}}/>
    </StyledModal>
  )
}

export default DayTimeAnalytic