import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Button } from "antd";
export const Container = styled.div`
    font-family: "Inter", sans-serif;
    margin-top: 30px;
    background-color: ${themes.colors.white};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .timetable {
        width: 100%;
    }
    .col {
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-around;
    }

    .time {
        font-weight: bold;
    }

    .shift {
        margin-top: 5px;
    }

    .saler {
        background-color: #b7eb8f;
    }

    .guard {
        background-color: #91caff;
    }
    .shift-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .shift {
        margin-bottom: 10px;
        font-weight: bold;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .day-cell {
        width: 100%;
        background-color: ${themes.colors.primary};
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: "Inter", sans-serif;
    }
`;
export const DayCol = styled.div`
    width: calc((100% - 40px) / 8);
    text-align: center;
`;
export const TimeSlotWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    width: 100%;

    border-radius: 4px;
    height: 80px;
    background-color: ${(props) => props.status};
    position: relative;
`;
export const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
    color: ${themes.colors.white};
    width: 200px;
    height: 40px; /* Adjust the height to fill the available space */
`;
export const ParentContainer = styled.div`
    display: flex;
    height: 200px; /* Set the desired height for the parent container */
    width: 40px; /* Set the desired width for the parent container */
    overflow: hidden;
    align-items: center;
    border-radius: 4px;
`;
export const ActionHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 30px;
    margin: 30px 0;
    text-align: center;
    justify-content: center;
    position: relative;
    width: 100%;
`;
export const Daytime = styled.div``;
export const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ant-btn-primary:not(:disabled):hover {
        background-color: ${themes.colors.primary600};
    }
`;
export const LeftButton = styled(Button)`
    background-color: ${themes.colors.primary};
    &:hover {
        background-color: ${themes.colors.primary700};
    }
`;
export const RightButton = styled(LeftButton)``;
export const EmployeeCard = styled.div`
    border-radius: 3px;
    height: 100%;
    display: flex;
    padding: 10px 5px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    text-align: left;
    position: relative;
    span {
        width: 80%;
        font-weight: bold;
    }
    .ant-image {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .ant-tag {
        width: 40%;
    }
`;
export const Instruction = styled.div`
    color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 500px;
    left: 1380px;
    justify-content: space-around;
    width: 150px;
    background-color: white;
    height: 160px;
    z-index: 99;
    border-radius: 4px;
`;
export const Info = styled.div``;
export const Color = styled.div`
    height: 30px;
    width: 50px;
    background-color: ${(props) => props.color};
    margin-right: 20px;
`;
export const Value = styled.div``;
export const Row = styled.div`
    display: flex;
`;

export const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -10px;
    right: -10px;
    svg {
        font-size: 20px;
        color: ${themes.colors.primary};
    }
`;
export const Header = styled.div`
    width: 100%;
    background-color: ${themes.colors.primary};
    border-radius: 4px 4px 0 0;
    height: 20px;
`;
export const Hero = styled.h1`
    text-align: start;
    color: ${themes.colors.primary};
    width: 100%;
    margin: 40px 0 0 40px;
`;
