import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
export const Card = styled.div`
    background-color: ${themes.colors.white};
    height: 200px;
    width: 500px;
    border-radius: 4px;
    position: relative;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CardWrapper = styled.div`
    min-height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;
export const Info = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 12px;
`;
export const Team = styled.div`
    width: 100%;
    text-align: center;
    padding: 0 15px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    height: 100%;
    h2 {
        font-weight: 600;
    }
    div {
    }
    .ant-btn-primary {
        background: ${themes.colors.primary};
    }
    .ant-btn-primary:not(:disabled):hover {
        background: ${themes.colors.primary600};
        border: 1px solid ${themes.colors.primary600};
    }
`;
export const Hero = styled.h1`
    margin: 15px 15px;
`;
export const Img = styled.img`
    width: 100%;
    height: 170px;
    width: 170px;
    border-radius: 4px;
`;
export const ShiftName = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    font-weight: 600;
    line-height: 15px;
    color: black;
`;
export const ShiftType = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${themes.colors.blackText};
    position: absolute;
    top: 0;
    left: 20px;
    width: 100%;
`;
export const Date = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: ${themes.colors.blackText};
`;
export const ShiftTime = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: ${themes.colors.blackText};
`;
export const Coefficient = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themes.colors.blackText};
    width: 100%;
`;
