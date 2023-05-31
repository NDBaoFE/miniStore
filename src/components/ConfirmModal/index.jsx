/* eslint-disable react/prop-types */

import { ModalWrapper } from "./style";


const ConfirmModal = ({ title, content,isModalOpen, handleConfirm, handleClose  }) => {
  
  
  return (   
      <ModalWrapper title={title} open={isModalOpen} onOk={handleConfirm} onCancel={handleClose}>
        {content}
      </ModalWrapper>
  );
};

export default ConfirmModal;
