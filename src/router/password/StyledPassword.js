import { styled } from "styled-components";
import { Button, Form, Modal} from "antd";

import { themes } from "../../utils/theme";
export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  
`;

export const Label = styled.div`
  margin-left: 5px;
  font-size: 15px;
  font-weight: 400;
`;

export const StyleForm = styled(Form)`
display: flex;
justify-content: center;
flex-direction: column;

  `

  export const NotiModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 2px;
    background: #ffffff;
    /* drop-shadow/0.12+0.8+0.5 */

    box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
      0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 2px;
  }
  .ant-btn-primary {
    background-color: ${themes.colors.primary};
  }
`;
