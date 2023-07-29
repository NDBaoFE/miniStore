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
    box-sizing: border-box;
    border: ${(props) =>
        props.isNow ? `4px solid ${themes.colors.primary} ` : "none"};
    background-clip: ${(props) => (props.isNow ? "content-box" : "border-box")};
    border-color: ${(props) => (props.isNow ? `${themes.colors.primary}` : "")};
`;
export const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);

    width: 200px;
    height: 40px; /* Adjust the height to fill the available space */
`;
export const ParentContainer = styled.div`
    display: flex;
    height: 200px; /* Set the desired height for the parent container */
    width: 40px; /* Set the desired width for the parent container */
    overflow: hidden;
    align-items: center;
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
    .ant-btn-primary:not(:disabled):hover {
        background-color: ${themes.colors.primary600};
    }
`;
export const Daytime = styled.div``;
export const ButtonContainer = styled.div`
    position: absolute;
    right: 30px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    justify-content: space-between;
    width: 150px;
    background-color: white;
    height: 200px;
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
export const Header = styled.div`
    width: 100%;
    background-color: ${themes.colors.primary};
    border-radius: 4px 4px 0 0;
    height: 20px;
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
export const Slide = styled.div`
    display: flex !important;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    height: 600px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 17px;
    text-align: center;
    @-webkit-keyframes check {
        0% {
            height: 0;
            width: 0;
        }
        40% {
            height: 0;
            width: 80px; /* Adjust the width to match the scaled icon */
        }
        50% {
            height: 0;
            width: 80px; /* Adjust the width to match the scaled icon */
        }
        100% {
            height: 160px; /* Adjust the height to match the scaled icon */
            width: 80px; /* Adjust the width to match the scaled icon */
        }
    }

    @-webkit-keyframes bounce {
        0% {
            transform: scale(0);
        }
        45% {
            transform: scale(
                1.25
            ); /* Adjust the scale to match the scaled icon */
        }
        60% {
            transform: scale(0.75);
        }
        75% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    button.success icon {
        -webkit-animation: bounce 1s 1 1s;
    }

    button.success icon:after {
        border-color: #fff;
        -webkit-animation: check 1s 1;
    }

    button.success icon.greeny:after {
        border-color: #fff;
        transition: border-color 200ms;
    }
    button,
    input[type="button"] {
        outline: none;
    }
    button::-moz-focus-inner,
    input[type="button"]::-moz-focus-inner {
        border: 0;
    }

    button:focus,
    input[type="button"]:focus {
        /* your custom focused styles here */
    }

    button:hover icon:before,
    button:hover icon:after {
        border-color: #fff;
    }
    icon {
        display: inline-block;
        width: 128px;
        height: 128px;
        margin-right: 7px;
        position: absolute;
        top: 30%;
        left: 39%;
    }
    icon:after {
        border-right: 24px solid white;
        border-top: 24px solid white;
        height: 160px;
        left: 0px;
        position: absolute;
        top: 12px;
        width: 80px;
        display: block;
        border-radius: 2px;
        content: "";
        transform: scaleX(-1) rotate(135deg);
        transform-origin: left top;
    }

    .reset {
        display: block;
        margin: 200px;
    }
`;
export const FocusBtn = styled.button`
    width: 100%;
    height: 90%;
    background-color: ${(props) => props.status};
    outline: none;
    display: flex;
    align-items: flex-end;
    position: relative;
    * {
        margin: 0;
        padding: 0;
    }

    .svg-box {
        display: inline-block;
        position: absolute;
        width: 150px;
        height: 150px;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
    }

    .red-stroke {
        stroke: red;
    }

    .circular circle.path {
        stroke-dasharray: 330;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        opacity: 1;
        animation: 0.7s draw-circle ease-out;
    }

    @keyframes draw-circle {
        0% {
            stroke-dasharray: 0, 330;
            stroke-dashoffset: 0;
            opacity: 1;
        }

        80% {
            stroke-dasharray: 330, 330;
            stroke-dashoffset: 0;
            opacity: 1;
        }

        100% {
            opacity: 1;
        }
    }

    /*---------- Cross ----------*/

    .cross {
        stroke-width: 6.25;
        stroke-linecap: round;
        position: absolute;
        top: 54px;
        left: 54px;
        width: 40px;
        height: 40px;
    }

    .cross .first-line {
        animation: 0.7s draw-first-line ease-out;
    }

    .cross .second-line {
        animation: 0.7s draw-second-line ease-out;
    }

    @keyframes draw-first-line {
        0% {
            stroke-dasharray: 0, 56;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 0, 56;
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dasharray: 56, 330;
            stroke-dashoffset: 0;
        }
    }

    @keyframes draw-second-line {
        0% {
            stroke-dasharray: 0, 55;
            stroke-dashoffset: 1;
        }

        50% {
            stroke-dasharray: 0, 55;
            stroke-dashoffset: 1;
        }

        100% {
            stroke-dasharray: 55, 0;
            stroke-dashoffset: 70;
        }
    }
`;
export const RequestWrapper = styled.div`
    margin-top: 20px;
    background: ${themes.colors.white};
    color: ${themes.colors.blackText};
    padding: 20px 10px;
    h2 {
        margin: 20px 10px;
    }
`;
