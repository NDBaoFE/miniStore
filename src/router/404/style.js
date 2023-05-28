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
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Background = styled.div`
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    width: 800px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
`;
export const Hero = styled.h1`
    font-size: 80px;
    margin-top: 20px;
`;
export const Box404 = styled.div`
    margin-top: -50px;
    background-color: ${themes.colors.white};
    width: 800px;
    border-radius: 10px;
    a {
        color: #fff !important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block;
    }
    h3,
    p {
        margin: 20px 0;
    }
`;
