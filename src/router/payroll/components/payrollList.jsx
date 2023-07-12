import { useState } from "react";
import { AntdTable } from "../payrollStyled"

function PayrollList({  userPayroll, setUserPayroll, columns, setCurrent, current, reload}){
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
        dataSource={userPayroll}
        rowClassName={rowClassName}
        pagination={{
          current: current,
          pageSize: 9,
          total: max,
          onChange: handlePageChange,
        }}
      />


    )

}

export default PayrollList