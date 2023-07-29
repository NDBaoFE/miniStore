import { useNavigate } from "react-router-dom";
import {useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./data";
/* eslint-disable react/prop-types */

import {
  AntdTable,
  UserWrapper,
  RevenueDashboardContainer,
  WrapperUserManagement,
  RevenueTitle,
} from "./style";

import { useEffect } from "react";
import userApi from "../../../utils/api/userApi";


import productApi from "../../../utils/api/productApi";
import PieChart from "./PieChart";


function UserList({
  search,
  users,
  setUsers,
  columns,
  setCurrent,
  current,
  reload,
}) {
  const navigate = useNavigate();
  const [max, setMax] = useState(0);

  const rowClassName = (record, index) => {
    if (index % 2 === 1) {
      return "table-row-striped";
    }
    return "";
  };
  const token = localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userApi.getUser(search, current - 1, token);
        setUsers(response.data.data.content);
        setMax(response.data.data.totalElement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search, current, reload, token]);
  const handlePageChange = (page) => {
    setCurrent(page);
    navigate(`/user/${page}`);
  };

  console.log(users);

  const [dataCount, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.dashboard(token);

        setData(response.data.data.userRank);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);

  console.log(dataCount);


  Chart.register(CategoryScale);
  const totalShiftCount = dataCount.map(item =>{
    return item[1]
  })
  console.log(totalShiftCount);
 
  totalShiftCount.map((shift) => console.log(shift.totalShiftCount))

  const [chartData, setChartData] = useState({
    labels: ["Admin", "Test"], 
    datasets: [
      {
        label: "Revenue",
        data: [50,50],
        backgroundColor: [
          "#50AF95",
          "#f3ba2f",
      
        ],
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });




  return (
    <WrapperUserManagement>
      <RevenueDashboardContainer>
         <div>
         <PieChart chartData={chartData} />
        </div>


      </RevenueDashboardContainer>

      <UserWrapper>
        <AntdTable
          columns={columns}
          dataSource={users}
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

export default UserList;
