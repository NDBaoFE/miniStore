import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
export const Total = styled.div`
    border-top: 1px solid #e8e9ea;
    color: ${themes.colors.blackText};
`;
export const OrderList = styled.div`
    color: ${themes.colors.blackText};
    max-height: calc(100vh - 400px);
    overflow-y: auto;
`;
export const Row = styled.div`
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 30px;
    .discount {
        color: ${themes.colors.primary};
        cursor: pointer;
        &:hover {
            color: ${themes.colors.primaryDark};
        }
    }
`;
export const OrderDetailRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    cursor: pointer;
`;
export const DeleteButton = styled.div`
    width: 40px;
    height: 38px;

    border: 1px solid #535d6e;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        color: red;
        border-color: red;
    }
`;
export const PaymentButton = styled.div`
    width: 269.7px;
    height: 38px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5ec401;
    border: 1px solid #5ec401;
    border-radius: 6px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${themes.colors.primaryDark};
        border-color: ${themes.colors.primaryDark};
    }
    a {
        color: ${themes.colors.white};
    }
`;
export const Price = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    /* or 157% */

    display: flex;
    align-items: center;
    text-align: end;
    color: ${themes.colors.blackText};
`;
export const Name = styled.div`
    margin-left: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 120px;
    text-align: start;
`;
export const Quantity = styled.div`
    border: 1px solid #d9dce2;
    border-radius: 8px;
    height: 33.75px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CloseButton = styled.div`
    margin-left: 30px;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: ${themes.colors.red2};
    }
`;
export const Wrapper = styled.div``;
export const ActionRow = styled(Row)`
    color: ${themes.colors.primary};
    margin-top: 15px;
    justify-content: flex-end;
    padding: 0;
    div {
        margin-right: 20px;
        cursor: pointer;
        &:hover {
            color: ${themes.colors.primaryDark};
        }
    }
`;
