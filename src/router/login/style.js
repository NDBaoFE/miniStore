import { styled } from "styled-components";
import { Input, Button, Form } from "antd";
import { themes } from "../../utils/theme";

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1096px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const WrapForm = styled.div`
    width: 50%;
    margin-left: 5%;
    margin-top: 5%;
`;

export const LoginFormMain = styled(Form)`
    width: 100%;
`;

export const NameBrand = styled.div`
    font-size: 40px;
    text-align: center;
    margin-left: 14%;
    margin-bottom: 40px;
    font-weight: 450;

    @media screen and (max-width: 1000px) {
        margin-left: 24%;
    }
`;

export const ColorLetter = styled.span`
    color: green;
`;

export const InputForm = styled(Input)`
    height: 50px;
    width: 350px;
    margin-left: 15%;
    font-size: 12px;
    border: black solid 1px;
    border-color: ${themes.colors.primary700} !important;
    &:hover {
        border-color: ${themes.colors.primary700} !important;
    }
`;

export const FormItem = styled(Form.Item)`
    margin-top: -10px;
`;

export const WrapImg = styled.div`
    width: 60%;
    margin-top: 8%;
    margin-left: 20px;
`;

export const IMG = styled.img`
    width: 100%;
    overflow: hidden;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-40px);
        }
        100% {
            transform: translatey(0px);
        }
    }
`;

export const LoginButton = styled(Button)`
    height: 40px;
    width: 350px;
    font-size: 12px;
    padding-top: 10px;
    margin-left: 15%;
    background-color: ${themes.colors.primary};
    &:hover {
        background-color: ${themes.colors.primary700} !important;
    }
`;
