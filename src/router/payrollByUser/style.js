import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Image } from "antd";
import {UserAddOutlined } from "@ant-design/icons"

export const AvatarWrapper = styled.div`
    position: relative;
    border-radius: 8px 8px 0 0;
    width: 100%;

    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    .ant-image {
        width: 180px;
        img {
            border-radius: 8px 8px 0 0;
            object-fit: cover;
          
        }

       
    }
    .ant-image-mask {
        border-radius: 8px 8px 8px 8px;
        height: 165px;
        margin-top: 34px;
        margin-left: 24px;

    
    }
`;
export const Avatar = styled(Image)`
    width:100px;

    

`
export const ProfileIcon = styled(UserAddOutlined)`
padding-top:25px;
    height: 100px;
    width: 100px;
    font-size:50px;
    border: black solid 1px;
    border-radius: 50px
`



export const Info = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
   
    font-size: 10.5px;
    line-height: 17px;
    padding: 15px 15px;
    text-align: center;
   
    width: 200px;
    border-radius: 0 0 8px 8px;
    h3 {
        margin: 10;
    }
    h2 {
        margin: 0;
        margin-bottom: 10px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: ${themes.colors.primary};
        background-color: ${themes.colors.gray100};
    }
`;

export const GroupWrapper = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 99;
    width: 300px;
    height: 50px;
    background: ${themes.colors.blackText};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${themes.colors.gray};
    div {
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


