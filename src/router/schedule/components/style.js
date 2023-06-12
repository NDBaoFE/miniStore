import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Modal } from "antd";
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
`;
export const Card = styled.div`
    background-color: ${themes.colors.white};
    min-height: 450px;
    width: 300px;
    border-radius: 4px;
    position: relative;
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
        background: ${themes.colors.background};
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
    width: 100%;
    padding: 8px;
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
        display: ${({ employeeId }) => (employeeId ? "block" : "none")};
        cursor: pointer;
        color: ${themes.colors.primary};
        &:hover {
            color: ${themes.colors.primary700};
            background-color: ${themes.colors.gray};
        }
    }
`;