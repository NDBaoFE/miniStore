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

function UserList({ search, users, setUsers, columns, setCurrent, current }) {
  const navigate = useNavigate();
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
        const response = await userApi.getUser(search, current - 1);
        setUsers(response.data.data.content);
        setMax(response.data.data.totalElement);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search, current]);
  const handlePageChange = (page) => {
    setCurrent(page);
    navigate(`/user/${page}`);
  };


  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [35, 35, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
       

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
     
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
