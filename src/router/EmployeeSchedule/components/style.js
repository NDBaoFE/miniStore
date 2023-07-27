import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Button, Modal } from "antd";
export const Container = styled.div`
    background-color: white;
    padding: 24px;
    border-radius: 10px;
    .events {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .events .ant-badge-status {
        width: 100%;
        overflow: hidden;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .notes-month {
        font-size: 28px;
        text-align: center;
    }
    .notes-month section {
        font-size: 28px;
    }
    .ant-picker-calendar {
        border-radius: 10px;
    }
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-calendar-date-content {
        height: 60px;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        z-index: 1;
        color: ${themes.colors.primary};
        background: #fff;
        border-color: ${themes.colors.primary};
    }
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected
        .ant-picker-calendar-date,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected
        .ant-picker-calendar-date-today,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected:hover
        .ant-picker-calendar-date,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected:hover
        .ant-picker-calendar-date-today {
        background: #e6f8ec;
    }
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected
        .ant-picker-calendar-date-today
        .ant-picker-calendar-date-value,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected
        .ant-picker-calendar-date
        .ant-picker-calendar-date-value,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected:hover
        .ant-picker-calendar-date-today
        .ant-picker-calendar-date-value,
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-cell-selected:hover
        .ant-picker-calendar-date
        .ant-picker-calendar-date-value {
        color: ${themes.colors.primary};
    }
    .ant-radio-button-wrapper:hover {
        color: ${themes.colors.primary};
    }
    .input-element div {
        display: block;
        max-width: 100%;
        text-align: left;
    }
    .date-element .ant-row {
        display: block;
        max-width: 100%;
    }
    ::selection {
        color: #fff;
        background: ${themes.colors.primary};
    }
    .ant-form-item {
        margin: 0 0 8px;
    }
    .ant-form-item-label {
        text-align: left;
    }
    .ant-picker-focused,
    .ant-picker:hover {
        border-color: ${themes.colors.primary};
    }
    .ant-picker-range .ant-picker-active-bar {
        background: ${themes.colors.primary};
    }
    .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
        background: ${themes.colors.primary};
    }
    .ant-picker-cell-in-view.ant-picker-cell-today
        .ant-picker-cell-inner:before {
        border-color: ${themes.colors.primary};
    }
    .ant-btn-primary {
        border-color: ${themes.colors.primary};
        background: ${themes.colors.primary};
    }
    .anticon-close-circle {
        font: 18px;
        margin: 10px;
        color: ${themes.colors.primary};
    }
    hr.solid {
        border-top: 1.5px solid ${themes.colors.primary};
    }
    .ant-picker-calendar-full
        .ant-picker-panel
        .ant-picker-calendar-date-today {
        border-color: ${themes.colors.primary};
    }
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(
            .ant-picker-cell-range-end-single
        ):before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(
            .ant-picker-cell-range-start-single
        ):before {
        background: #e6f8ec;
    }
    .ant-picker-cell-in-view.ant-picker-cell-in-range:before {
        background: #e6f8ec;
    }
    .ant-picker-time-panel-column
        > li.ant-picker-time-panel-cell-selected
        .ant-picker-time-panel-cell-inner {
        background: #e6f8ec;
    }
    .ant-input-focused,
    .ant-input:focus {
        border-color: ${themes.colors.primary};
    }

    .rbc-agenda-table > tbody > tr {
        background-color: #e6f8ec;
    }
    .rbc-today {
        background: #e6f8ec;
    }
    .rbc-show-more {
        color: white;
    }
    .rbc-event,
    .rbc-background-event {
        background-color: ${themes.colors.primary};
    }
`;
export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    .ant-carousel {
        width: 1000px;
        height: 300px;
    }
`;
export const Card = styled.div`
    background-color: ${themes.colors.white};
    height: 450px;
    width: 300px;
    border-radius: 4px;
    position: relative;
    padding: 12px;
    display: flex;
    flex-direction: column;
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
    top: 15px;
    left: 15px;
    padding: 12px;
`;
export const Team = styled.div`
    padding: 0 15px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    h2 {
        font-weight: 600;
    }
    div {
    }
`;
export const Hero = styled.h1`
    margin: 15px 15px;
`;
export const Img = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 4px;
`;
export const ShiftName = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(102, 102, 102, 0.8);
`;
export const ShiftType = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: ${themes.colors.blackText};
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
    font-size: 12px;
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
export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    .ant-btn-default:not(:disabled):hover {
        color: ${themes.colors.white};
        border-color: ${themes.colors.primary};
    }
`;
export const UserList = styled.div``;
export const List = styled.div`
    padding: 0 30px;
    background-color: ${themes.colors.white};
`;
export const User = styled.div`
    padding: 5px 10px;
    border-radius: 10px;
    background-color: ${themes.colors.primary};
    margin: 15px 0;
    color: ${themes.colors.white};
`;
export const StyledModal = styled(Modal)`
    .ant-modal-content {
        background: ${themes.colors.white};
    }
    .container {
        display: flex;
        justify-content: space-around;
        padding: 12px;
    }
    .pos {
        flex-grow: 1;
    }
    .employee-list {
        padding: 20px;
        text-align: center;
        background: ${themes.colors.white};
    }
    .placeholder {
        border: 2px dashed gray;
        padding: 20px;
        text-align: center;
        width: 200px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .employee {
            position: absolute;
        }
    }

    .slick-track {
        display: flex;
    }
    .slick-slider {
        padding: 20px;
        height: 600px;
        background-color: ${themes.colors.background};
    }
    .slick-prev,
    .slick-next {
        background-color: transparent;
        &:hover {
            color: ${themes.colors.primary};
        }
        color: ${themes.colors.primary};
    }
`;

const Column = styled.div`
    min-height: 150px;
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    border-radius: 5px;
    padding: 15px 15px;
`;

export const EmployeeList = styled(Column)`
    background: #ffffff;
`;

export const PositionList = styled(Column)`
    background: #ffffff;
`;

export const Title = styled.h3`
    color: #10957d;
    background: rgba(16, 149, 125, 0.15);
    padding: 2px 10px;
    border-radius: 5px;
    align-self: flex-start;
    margin-bottom: 10px;
`;

export const EmployeeCard = styled.div`
    background: #fff;
    border-radius: 3px;
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PositionSlot = styled.div`
    border-radius: 3px;
    padding: 8px;
    margin-bottom: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    svg {
        display: ${({ employeeid }) => (employeeid ? "block" : "none")};
        cursor: pointer;
        color: ${themes.colors.primary};
        &:hover {
            color: ${themes.colors.primary700};
            background-color: ${themes.colors.gray};
        }
    }
`;
export const GroupWrapper = styled.div`
    position: absolute;
    right: 60px;
    bottom: 20px;
    z-index: 99;
    width: 240px;
    height: 20px;
    background: ${themes.colors.blackText};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${themes.colors.gray};
    div {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const FinishButton = styled.div`
    padding: 8px 12px;
    color: ${themes.colors.white};
    background: ${themes.colors.primary};
    border: 1px solid ${themes.colors.primary};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: ${themes.colors.primaryDark};
        color: ${themes.colors.white};
        text-decoration: none !important;
        border: 1px solid ${themes.colors.primaryDark};
    }
`;
export const NotiModal = styled(Modal)`
    .ant-modal-content {
        border-radius: 2px;
        background: #ffffff;
        /* drop-shadow/0.12+0.8+0.5 */

        box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
            0px 6px 16px rgba(0, 0, 0, 0.08),
            0px 9px 28px 8px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
        .ant-modal-confirm-btns {
            .ant-btn-primary {
                background-color: ${themes.colors.primary} !important;
            }
        }
    }
`;
export const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ChooseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ModalWrapper = styled.div``;
export const PageAction = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${themes.colors.white};
    cursor: pointer;
    &:hover {
        color: ${themes.colors.white};
        background-color: ${themes.colors.primary};
    }
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const StyledButton = styled(Button)`
    height: 30px;
    color: ${themes.colors.white};
    background-color: ${themes.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
`;
export const WorkingShiftContainer = styled.div`
    height: 300px;
    width: 100%;
    padding: 0 200px;
    background-color: ${themes.colors.white};
    .time-slot {
        width: 132px;
        height: 100px;
    }
`;
