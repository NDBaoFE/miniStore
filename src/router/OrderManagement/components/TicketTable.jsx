/* eslint-disable react/prop-types */


import { Table} from "antd";

import "./style.css";


import { useState } from "react";
import { useEffect } from "react";
import productApi from "../../../utils/api/productApi";

function OrderTable({
  orders,
  reload,
  columns,
  setCurrent,
  current,
  setOrders,
}) {
  const [max, setMax] = useState(0);
  const rowClassName = (record, index) => {
    if (index % 2 === 1) {
      return "table-row-striped";
    }
    return "";
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const token = localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllOrder(token);
        setOrders(response.data.data);
        setMax(response.data.data.totalElement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [current, reload, token]);
  const handlePageChange = (page) => {
    setCurrent(page);
    navigate(`/user/${page}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={orders}
      rowClassName={rowClassName}
      pagination={{
        current: current,
        pageSize: 9,
        total: max,
        onChange: handlePageChange,
      }}
    />
  );
}

export default OrderTable;
