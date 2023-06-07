import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
const ScheduleComponent = () => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  );
};
export default ScheduleComponent;