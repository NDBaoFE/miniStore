import { useState } from "react";
import { AntdTable } from "../payrollByUserStyled"

function PayrollListByUser({  userPayrollByUser, setUserPayrollByUser, columns, setCurrent, current, reload}){
    const [max, setMax] = useState(0);
    const handlePageChange = (page) => {
        setCurrent(page);

      };
    
    const rowClassName = (record, index) => {
        if (index % 2 === 1) {
          return "table-row-striped";
        }
        return "";
      };

    return (
        


        <AntdTable
        columns={columns}
        dataSource={userPayrollByUser}
        rowClassName={rowClassName}
        pagination={{
          current: current,
          pageSize: 12,
          total: max,
          onChange: handlePageChange,
        }}
      />


    )

}

export default PayrollListByUser