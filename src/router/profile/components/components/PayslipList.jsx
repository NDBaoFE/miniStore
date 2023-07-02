
import { useState } from "react";
import moment from "moment";

/* eslint-disable react/prop-types */

import {
  AntdTable,
  UserWrapper,
  WrapperUserManagement,
} from "../style";

import { useEffect } from "react";
import payslip from "../../../../utils/api/payslipApi";



function PayslipList({ search, payslips, setPayslips, columns, setCurrent, current, reload }) {
  const [max, setMax] = useState(0);

  const rowClassName = (record, index) => {
    if (index % 2 === 1) {
      return "table-row-striped";
    }
    return "";
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await payslip.getPayslip(search, current - 1);
        console.log(response.data.data);
        setPayslips(response.data.data);
        setMax(response.data.data.totalElement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search, current, reload,setPayslips]);
  const handlePageChange = (page) => {
    setCurrent(page);
  };


  return (
    <WrapperUserManagement>

      <UserWrapper>
        <AntdTable
          columns={columns}
          dataSource={payslips}
          rowClassName={rowClassName}
          pagination={{
            current: current,
            pageSize: 9,
            total: max,
            onChange: handlePageChange,
          }}
        />
      </UserWrapper>
    </WrapperUserManagement>
  );
}

export default PayslipList;
