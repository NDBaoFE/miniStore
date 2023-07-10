import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const Wrapper = styled.section`
    padding: 40px 0;
    font-family: "Arvo", serif;
    width: 100%;
    color: ${themes.colors.blackText};
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1096px;
`;
export const Background = styled.div``;
export const Hero = styled.h1`
    font-size: 80px;
    margin-top: 20px;
`;
export const Box404 = styled.div`
    margin-top: 500px;
    background-color: ${themes.colors.white};
    width: 800px;
    border-radius: 10px;
    a {
        color: ${themes.colors.white};
        padding: 10px 20px;
        background: ${themes.colors.primary};
        margin: 20px 0;
        display: inline-block;
        border-radius: 4px;
        &:hover {
            background-color: ${themes.colors.primaryDark};
        }
    }
    h3,
    p {
        width: 100%;
        margin: 20px 0;
    }
`;
export const Img = styled.div`
    width: 100%;
    height: 50px;
`;
