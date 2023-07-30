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
import { themes } from "../../../utils/theme";


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


  // Chart.register(CategoryScale);
  // const totalShiftCount = dataCount.map(item =>{
  //   return item[1]
  // })
  // console.log(totalShiftCount);
 
  // totalShiftCount.map((shift) => console.log(shift.totalShiftCount))

  // const [chartData, setChartData] = useState({
  //   labels: ["Admin", "Test"], 
  //   datasets: [
  //     {
  //       label: "Revenue",
  //       data: [50,50],
  //       backgroundColor: [
  //         "#50AF95",
  //         "#f3ba2f",
      
  //       ],
  //       borderColor: "black",
  //       borderWidth: 1
  //     }
  //   ]
  // });

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['AdminTest', 'Admin', 'Saler','Guard'],
        datasets: [{
          label: '# of Votes',
          data: [40,20, 20, 20],
          backgroundColor: [
            `${themes.colors.primary200}`,
            `${themes.colors.primary300}`,
            `${themes.colors.primary400}`,
            `${themes.colors.primary}`,
       

          ],
          borderColor: [
            `${themes.colors.primary200}`,
            `${themes.colors.primary300}`,
            `${themes.colors.primary400}`,
            `${themes.colors.primary}`,
     
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }, []);



  return (
    <WrapperUserManagement>
      <RevenueDashboardContainer>
         <div>
         <canvas id="myChart" width="400" height="400"></canvas>
         <RevenueTitle>Revenue</RevenueTitle>
        <RevenueTitle>for last 30days</RevenueTitle>
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
