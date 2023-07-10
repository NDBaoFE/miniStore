/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';
import { EmployeeCard } from './style';
import { Image, Tag } from 'antd';

const Employee = ({ employee }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'employee',
    item: { ...employee },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className='employee'>
   <EmployeeCard >
     <Image src={employee.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
     <span style={{marginLeft:20}}>{employee.name}</span>
     <Tag color={`${employee.role.name == "admin"? "red": employee.role.name == "saler" ?"green":"blue" }`}  style={{marginLeft:20}}>{employee.role.name}</Tag>
    </EmployeeCard>
    </div>
  );
};

export default Employee;
