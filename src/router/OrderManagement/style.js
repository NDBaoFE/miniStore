import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Button } from "antd";
export const Container = styled.div`
    font-family: "Inter", sans-serif;
    margin-top: 30px;
    background-color: ${themes.colors.white};
    border-radius: 10px;
    padding: 10px 20px;
    position: relative;
    color: ${themes.colors.blackText};
    width: 100%;
    font-size: 18px;
    .ant-table-wrapper .ant-table-column-sorter-down.active {
        color: ${themes.colors.primary600};
    }
    .ant-table-wrapper .ant-table-column-sorter-up.active,
    .ant-table-wrapper .ant-table-column-sorter-down.active {
        color: ${themes.colors.primary600};
    }
    a {
        color: ${themes.colors.primary600};
    }
    .ant-pagination .ant-pagination-item-active:hover a {
        color: ${themes.colors.primary600};
    }
    .ant-pagination .ant-pagination-item a {
        color: ${themes.colors.primary600};
    }
    .ant-pagination .ant-pagination-item-active {
        border-color: ${themes.colors.primary600};
    }
`;

export const StyledButton = styled(Button)``;
export const Hero = styled.h1`
    margin: 0 0 15px 0;
    text-align: left;
`;
export const DashBoard = styled.div`
    min-height: 150px;
    display: flex;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    div {
        margin-top: 10px;
        font-size: 18px;
    }
    .ant-image {
        width: 150px;
    }
`;
export const Right = styled.div`
    width: 70%;
    align-items: center;
    justify-content: space-around;
    display: flex;
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100% - 60px) / 3);
    height: 150px;
    background-color: ${(props) => props.color};
    position: relative;
    justify-content: center;
`;
export const Icon = styled.div`
    border-radius: 50%;
    position: absolute;
    top: -25px;
    background-color: ${(props) => props.color};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${themes.colors.gray};
`;
export const Name = styled.div``;

export const Email = styled.div``;
export const Title = styled.div`
    margin-top: 30px;
`;
export const Number = styled.div`
    font-size: 25px;
`;
