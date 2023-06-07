import {  Form , Modal} from "antd";

import { styled } from "styled-components";
import { themes } from "../../../utils/theme";

export const FormAddUserSection = styled.section`
  margin: 20px auto;
  margin-top:50px;
  max-width: 1096px;

  display: flex;
  justify-center: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const Left = styled.div`
  height:300px;
  width:20%;
  background-color: white;
  margin-left:50px;
  margin-right: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
border-radius: 10px;
  `

  
export const WrapperFormUser = styled.div`
height:630px;
width:65%;
background-color: white;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
border-radius: 10px;



`

export const Title = styled.div`
  color: green;
  width: 400px;
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const Label = styled.div`
  margin-left: 5px;
  font-size:15px;
  font-weight: 400;
`

export const Item = styled(Form.Item)`
  // padding-right:20px;
  // padding-top:10px;
`

export const FormUser = styled(Form)`

`
export const Row = styled.div`
    width: 100%;
    display: flex;
   margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-size: 24px;
    }
`;
export const StyledForm = styled(Form)`
    position: relative;
    padding: 0 30px;
    margin-top: 30px;
    color: ${themes.colors.blackText};
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        height: 50px;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .ant-select-dropdown .ant-select-item-option-active {
        background-color: ${themes.colors.background} !important;
    }
    .ant-select-single:not(.ant-select-customize-input)
        .ant-select-selector
        .ant-select-selection-search-input {
        height: 50px;
        
    }
    .ant-input:hover {
        border-color: ${themes.colors.primary};
    }
    .ant-input {
        height: 50px;
        
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
    }
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
`;