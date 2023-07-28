import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Input, Modal } from "antd";
// import Voucher from "../../../assets/image/Voucher.svg";
export const Total = styled.div`
    border-top: 1px solid #e8e9ea;
    color: ${themes.colors.blackText};
`;
export const OrderList = styled.div`
    color: ${themes.colors.blackText};
    min-height: calc(100vh - 300px);
    overflow-y: auto;
    /* background-image: url("/Voucher.svg");
    background-position: center; /* Center the image */
    /* background-repeat: no-repeat;  */
    .cart::-webkit-scrollbar-track {
        background-color: #fafafa;
    }
    .cart::-webkit-scrollbar-thumb {
        background-image: linear-gradient(-45deg, #3edf7c, #2eb161);
        border-radius: 50px;
    }
    .cart::-webkit-scrollbar {
        width: 10px;
    }
`;
export const Row = styled.div`
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
    transition: 0.3s all ease;
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
    background: ${themes.colors.primary};
    border: 1px solid #5ec401;
    border-radius: 6px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${themes.colors.primaryDark};
        border-color: ${themes.colors.primaryDark};
    }

    @media (max-width: 1125px) {
        width: 120px;
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
export const Quantity = styled(Input)`
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
export const Wrapper = styled.div`
    margin-top: 10px;
`;
export const ActionRow = styled(Row)`
    color: ${themes.colors.blackText};
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
    a {
        color: ${themes.colors.primary};
    }
`;
export const BadgeContainer = styled.div`
    border-radius: 50%;
    background-color: ${themes.colors.primary};
    padding: 5px;
`;
export const OldPrice = styled(Price)`
    text-decoration: line-through;
`;
export const CartWrapper = styled.div``;
export const StyledModal = styled(Modal)`
    .ant-modal-content {
        background: ${themes.colors.background};
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${themes.colors.white};
    width: 400px;
    margin: 0 auto;
    padding: 20px 20px;
    border-radius: 8px;
    img {
        width: 150px;
    }
    h3,
    h2 {
        margin: 5px 5px;
    }
    .quantity {
        color: ${themes.colors.primary};
    }
`;
