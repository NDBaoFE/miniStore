import { Table, Space, Button } from "antd";
import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 24px;
  }
`;


export const Label = styled.div`
  margin-left: 5px;
  font-size: 15px;
  font-weight: 400;
`;


export const AntdTable = styled(Table)`
    width: 100%;
    img {
        width: 70px;
        height: 50px;
        object-fit: contain;
        border: 1px solid ${themes.colors.primary};
        border-radius: 5px;
        margin-top:-20px;
    }
    .table-row-striped {
        background-color: ${themes.colors.stripe};
    }
    .detail {
        display: flex;
        align-items: center;
    }
`;
