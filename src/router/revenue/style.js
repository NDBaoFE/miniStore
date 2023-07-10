import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Line } from "react-chartjs-2";

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
    padding: 0 10px;
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
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${themes.colors.gray};
`;

export const Left = styled.div`
    background-color: ${themes.colors.white};
    width: 70%;
    border-radius: 4px;
`;
export const Right = styled.div`
    background-color: ${themes.colors.white};
    width: 28%;
    border-radius: 4px;
    text-align: center;
`;
export const Commercial = styled.div`
    width: 100%;
    height: 150px;
    border-radius: 4px;
    background-color: ${themes.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
    color: ${themes.colors.white};
    &:hover {
        background: ${themes.colors.primary600};
    }
    img {
        width: 80%;
    }
`;
export const StyledLine = styled(Line)``;
export const Body = styled.div``;
export const EmployeeCard = styled.div`
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: space-between;
    .ant-image-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        object-fit: cover;
    }
    img {
        border-radius: 50%;
    }
`;
export const Name = styled.div``;
export const Email = styled.div``;

export const HeroWrapper = styled.div`
    height: 40px;
    background-color: ${themes.colors.primary};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TableContainer = styled.div`
    margin-top: 30px;
    background: ${themes.colors.white};
    padding: 20px 10px;
    h2 {
        margin: 20px 15px;
    }
`;
