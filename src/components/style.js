import styled from "styled-components";
import { themes } from "../utils/theme/index";
import { Layout } from "antd";
export const Container = styled.div`
    font-family: "Nunito Sans", sans-serif;
`;
export const ChartContainer = styled.div`
    border-radius: 10px;
    padding: 20px;
    display: flex;
    width: 800px;
    height: 400px;
    justify-content: space-around;
    background: ${themes.colors.background};
    color: white;
    font-family: "Nunito Sans", sans-serif;
    margin-bottom: 30px;
    margin: 30px auto;
    section {
        display: flex;
        background: ${themes.colors.background};
        flex-direction: column;
        border-radius: 10px;
    }
`;

export const ChartTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;
export const Upbutton = styled.button`
    width: 100px;
    height: 100px;
    background: #a2a1ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    &:hover {
        background: #8988ff;
    }
`;
export const Downbutton = styled(Upbutton)`
    background: #f26c6d;
    margin-top: 30px;
    &:hover {
        background: #ec2627;
    }
`;
export const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    text-align: center;
`;

export const ModalTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ModalText = styled.p`
    font-size: 18px;
    margin-bottom: 30px;
`;

export const ModalButton = styled.button`
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0069d9;
    }
`;
export const ActionWrapper = styled.div`
    width: 350px;
    min-height: 100vh;
    background: ${themes.colors.background};
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    justify-content: center;
`;
export const StyledLayout = styled(Layout)`
    margin-left: ${(props) => (props.collapsed === true ? "80px" : "240px")};
    transition: 0.3s ease;
`;
