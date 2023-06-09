import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const UpdateInfo = (info) => {
    // productApi.putAccountByAdmin(info, token);
};

const confirm = (info) => {
    Modal.confirm({
        maskClosable: true,
        title: 'Bạn có muốn thay đổi thông tin tài khoản?',
        icon: <ExclamationCircleOutlined />,
        content: 'Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.',
        okText: 'Xác nhận',
        cancelText: 'Huỷ',
        onOk: () => {
            // openNotification();
            UpdateInfo(info);
        },
    });
};

const ConfirmModal = ({ info }) => {
    return (
        <Button type="primary" block onClick={() => confirm(info)}>
            Xác nhận
        </Button>
    );
};

export default ConfirmModal;