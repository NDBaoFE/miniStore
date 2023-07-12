/* eslint-disable react/prop-types */


import {  Tour } from 'antd';

function ApplyTour({openTour,setOpenTour,ref1,ref2,ref3}) {
    

    const steps = [
      {
        title: 'Status of shifts',
        description: `This show status of all the shifts including checkin checkout and absent , you can check it 
         to make sure you received the right attendance check`,
        
        target: () => ref1.current,
      },
      {
        title: 'Careful the Time',
        description: 'These are your current weeks , make sure you apply the right week and shifts',
        target: () => ref2.current,
      },
      {
        title: 'Choose your Shift',
        description: `You can click on any  element in the table to register  for  the shift, you can't request an already assigned shift !!`,
        target: () => ref3.current,
      },
    ];
  return (
    <>
      

      <Tour open={openTour} onClose={() => setOpenTour(false)} steps={steps} />
    </>
  )
}

export default ApplyTour