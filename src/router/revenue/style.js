import { styled } from "styled-components";
import { themes } from "../../utils/theme";

export const Container = styled.div`
    margin: 20px auto;
    max-width: 1096px;
    background-color: ${themes.colors.white};
    color: ${themes.colors.blackText};

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    border-radius: 4px;
    height: 100vh;
`;

export const Hero = styled.h1`
    color: ${themes.colors.primary};
`;
export const Summary = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Card = styled.div`
    width: calc((100% - 48px) / 4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 150px;
    background: ${themes.colors.background};
    border-radius: 10px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 50px;
`;

export const Number = styled.div`
    font-size: 40px;
`;
export const Action = styled.div``;

export const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${themes.colors.primary};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ChartContainer = styled.div``;
