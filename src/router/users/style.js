import { styled } from "styled-components";
import { Space } from "antd";
import { themes } from "../../utils/theme";

export const Container = styled.div`
    position: relative;
`;
export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
export const StyledSpace = styled(Space)`
    a {
        color: ${themes.colors.primary};
        &:hover {
            color: ${themes.colors.primary700};
        }
    }
    color: ${themes.colors.primary};
    cursor: pointer;
    font-family: "Inter";
    &:hover {
        color: ${themes.colors.primary700};
    }
`;