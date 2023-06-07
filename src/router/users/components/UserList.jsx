import { useNavigate } from "react-router-dom";
import { useState } from "react";
/* eslint-disable react/prop-types */

import { AntdTable, UserWrapper, RevenueDashboardContainer,WrapperUserManagement } from "./style";
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

  return (
    <WrapperUserManagement>
      <RevenueDashboardContainer />
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
