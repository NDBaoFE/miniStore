import styled from "styled-components";
import { AiOutlineMail } from  'react-icons/ai';
import {Form, Input} from "antd"


export const WrapMessage = styled.div`
    display:flex;
    border: black solid 1px;
    margin-bottom: 100px;
    height: 500px;
    justify-content: space-around;
    padding: 0px 100px;
    
`

export const MailIcon = styled(AiOutlineMail)`
  width: 30%;
  height: 50px;
  margin-top:40px;

`;

export const MessageUs = styled.p`
color:black;
margin-top:50px;
width: 40%;
font-size: 12px;
margin-left:-50px;
`;

export const InputMessageForm = styled(Input)`
    margin-top: 50px;
    width:100%;
`;

export const MessageForm = styled(Form)`
width: 30%;
`;

export const BrandName = styled.div`
  background-color: #00796b;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 47vw;
  color: white;
  font-weight: 600;
`;

export const WrapContent1 = styled.div`
  height: 300px;
  padding-top: 50px;
  display:flex;

`;

export const Name1 = styled.div`
padding-top:60px;
padding-left: 100px;
font-size: 18px;
font-weight: 600;
width: 50%;

`

export const AboutContent1 = styled.p`
font-size: 16px;
font-weight: 400;
width: 330px;
text-align: left;
margin-top: 5px;
margin-left: 0px
`

export const WrapIMG = styled.div`
    width: 300px;
    height: 295px;
    overflow-y:hidden;

`

export const IMG = styled.img`
    width:100%;
    height: 100%;
    object-fit: content;

`
export const WrapContent2 = styled.div`
  height: 310px;
  padding-top: 10px;
  background-color: #00796b;
  display:flex;
`;

export const WrapIMG2 = styled.div`
width: 500px;
height: 300px;
overflow-y:hidden;

padding-left: 100px;
`

export const Name2= styled.div`
padding-top:60px;
padding-left: 100px;
font-size: 18px;
font-weight: 600;
width: 50%;
color: white;
`

export const IMG2 = styled.img`
width:100%;
height: 100%;
object-fit: content;

`


export const AboutContent2 = styled.p`
font-size: 16px;
font-weight: 400;
width: 330px;
text-align: left;
margin-top: 5px;
margin-left: 0px;
color: white;
`