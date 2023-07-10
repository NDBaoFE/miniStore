import { styled } from "styled-components";
import {HomeOutlined } from "@ant-design/icons"
import { themes } from "../../../utils/theme";
import {Form} from "antd"

export const Container = styled.div`
  margin: 20px auto;
  margin-top: 20px;
  max-width: 1096px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperIntroduction = styled.div`
  width:100%;
    margin-top: 30px;

`

export const GeneralIcon = styled(HomeOutlined)`
  font-size: 40px;
  width: 100%;
  color: #FDAD7E;
`

export const ColorIntroTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  
`

export const IntroTitle = styled.div`
  width:100%;
  text-align:center;
  line-height: 20px;

`

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-left: 10px;
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
    display:flex;
    justify-content:space-around;
    color: ${themes.colors.blackText};
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        width:120px;

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
        height: 40px;
       
        
    }
`;

export const Left = styled.div`
  height:400px;
  width: 45%;
  padding-top: 0px;
  padding-left: 20px;
  

  `

export const Label = styled.div`
  margin-left: 5px;
  font-size:15px;
  font-weight: 400;
`

export const WrapperIndentication = styled.div`
    background-color: white;
    padding-top: 20px;
    background-color: white;
    height: 220px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

`

export const IndenticationTitle = styled.div`
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
    
`

export const Right = styled.div`
height:200px;
width: 40%;
margin-right: 30px;
`;


export const ContactDetail = styled.div`
    margin-top:20px;
    padding-top: 20px;
    background-color: white;
    height: 220px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`

export const Currency = styled.div`
margin-top:20px;
padding-top: 20px;
background-color: white;
height: 120px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
border-radius: 5px;

`

export const Address = styled.div`
margin-top:40px;
padding-top: 20px;
background-color: white;
height: 180px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
border-radius: 5px;

`