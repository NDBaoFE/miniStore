
import { GroupWrapper,FinishButton, NotiModal } from "./styled"
import { useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import productApi from "../../../utils/api/productApi";
import { BsExclamationCircle } from "react-icons/Bs";
import { toastError, toastSuccess } from "../../../components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearOrder } from "../../home/components/slice";
function ActionGroup() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {orderList} = useSelector(selector);
  const handleOk = async () => {
    const modifiedOrderList = {
      ...orderList,
      data: orderList.data.map((order) => {
       let {productId,price,quantity,voucherId}=order;
       
        return {productId,price,quantity,voucherId};
      }),
    };
    
    delete modifiedOrderList.percentDiscount;
    
    const res= await productApi.makeOrder(modifiedOrderList);
      if(res.data.status  ==200){
        toastSuccess("Make order Successfully");
        dispatch(clearOrder());
        navigate(-1);
      }else{
        toastError("Make order Failed");
      }
  }

  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
   
  };
  const confirm = async() => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Bạn có muốn thay đổi thông tin tài khoản?',
        icon: <BsExclamationCircle />,
        content: 'Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.',
        okText: 'Xác nhận',
        cancelText: 'Huỷ',
        onOk: async() => {
          handleConfirm();
        },
    });
  };

  return (
    <GroupWrapper>
       
        <div>Discard Sale</div>
        <FinishButton onClick={()=>confirm()}>$ Finish Sale</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup