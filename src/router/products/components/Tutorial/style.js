import { styled } from "styled-components";
import { themes } from "../../../../utils/theme";
export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    min-height: 250px;
`;

export const Left = styled.div`
    width: 45%;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
    }
`;
export const Right = styled.div`
    width: 50%;
`;
export const Step = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Description = styled.p``;
export const Hero = styled.h1`
    text-align: center;
`;
export const Text = styled.section`
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    justify-content: flex-start;
    h2 {
        font-size: 15px;
        margin: 0;
    }
    h3 {
        margin: 0;
        font-size: 14px;

        font-weight: 300;
    }
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    div {
        height: 30px;
        width: 30px;
        background-color: ${themes.colors.primary};
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    margin: 15px;
`;
