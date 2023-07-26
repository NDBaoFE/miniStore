import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Chart from "chart.js/auto";
/* eslint-disable react/prop-types */

import {
  AntdTable,
  UserWrapper,
  RevenueDashboardContainer,
  WrapperUserManagement,RevenueTitle
} from "./style";

import { useEffect } from "react";
import userApi from "../../../utils/api/userApi";

import { themes } from "../../../utils/theme";
import productApi from "../../../utils/api/productApi";


function UserList({ search, users, setUsers, columns, setCurrent, current, reload }) {
  const navigate = useNavigate();
  const [max, setMax] = useState(0);

  const rowClassName = (record, index) => {
    if (index % 2 === 1) {
      return "table-row-striped";
    }
    return "";
  };
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userApi.getUser(search, current - 1,token);
        setUsers(response.data.data.content);
        setMax(response.data.data.totalElement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search, current, reload,token]);
  const handlePageChange = (page) => {
    setCurrent(page);
    navigate(`/user/${page}`);
  };




  const setData = (revenue) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
      labels: ['AdminTest', 'Admin', 'Saler','Guard'],
      datasets: [{
        label: '# of Votes',
        data: [revenue, 50],
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
    };
  
    new Chart(ctx, {
      type: 'pie',
      data: data,
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
  };
  
  useEffect(() => {
      async function fetchDataRevenue() {
        try {
          const response = await productApi.dashboard(token);
          console.log(response.data.data.userRank[0][1].totalRevenue);
          setData(response.data.data.userRank[0][1].totalRevenue);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDataRevenue();
    }, [token]);
    
  return (
    <WrapperUserManagement>
      <RevenueDashboardContainer>
        <div>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>

        <RevenueTitle>Revenue</RevenueTitle>
        <RevenueTitle>for last 30days</RevenueTitle>
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
