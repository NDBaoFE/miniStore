import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Divider, Button, Modal, Table } from "antd";
import { Card, Container, DashBoard, Hero, Icon, Right, Title } from "./style";
import { ticketTypes } from "./components/dataOrder";
import { IconContext } from "react-icons";
import Action from "./components/Action";
import OrderTable from "./components/TicketTable";
import AddOrder from "./components/AddOrder";
import productApi from "../../utils/api/productApi";
import AnimatedNumbers from "react-animated-numbers";

import orderManagementApi from "../../utils/api/orderManagementApi";
import { NotiModalOrder } from "../OrderManagement/components/style";
import { toastError, toastSuccess } from "../../components/Toast";
import { BsExclamationCircle } from "react-icons/Bs";
import OrderDetailTable from "./components/OrderDetailTable";
import { render } from "react-dom";

const OrderManagemntPage = () => {
  const params = useParams();
  const [openAdd, setOpenAdd] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [report, setReport] = useState(null);
  const token = localStorage.getItem("Authorization");
  const [search, setSearch] = useState("");
  const [reload, SetReload] = useState(false);
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true)

  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const [order, setOrder] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllOrder(token);
        setOrder(response.data.data);
  
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [current, reload, token]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllTicket(token);
        console.log(response.data.data);
        const processedTickets = await response.data.data.processedTickets;

        const unprocessedTickets = await response.data.data.unprocessedTickets;
        setReport({
          numberOfProcessedTickets: processedTickets.length,
          numberOfUnprocessedTickets: unprocessedTickets.length,
        });
        if (processedTickets == [] && unprocessedTickets == []) {
          setTickets([]);
        } else if (processedTickets == []) {
          setTickets(unprocessedTickets);
        } else if (unprocessedTickets == []) {
          setTickets(processedTickets);
        } else {
          setTickets([...processedTickets, ...unprocessedTickets]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [loaded]);

  const columns = [
    {
      title: "OrderID",
      dataIndex: "orderId",
      render: (_, record) => <span>{record.orderId}</span>,
    },
    {
      title: "Saler Name",
      dataIndex: "saler",
      render: (_, record) => <span>{record.orderUser.name}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (_, record) => {
        const dateString = record.date;
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("short", {
          locale: "en-US",
        });
        return formattedDate;
      },
    },

    {
      title: "Total",
      dataIndex: "total",
      // render: (_, record) => (
      //   <span>{record.ticketType.name}</span>
      // ),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      // render: (_, record) => (
      //   <span>{record.isApproved? 'Yes' : record.isApproved== false? 'No': 'Pending'}</span>
      // ),
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_, record) => (
        <span>
          <Button><Link to={`/orderDetail/${record.orderId}`}>View </Link></Button>
          <Button
            danger
            style={{ marginLeft: 20 }}
            onClick={() => confirm(record.orderId)}
          >
            Roll Back
          </Button>
        </span>
      ),
    },
  ];

  const handleOrderDeleted = () => {
    // Refresh the vouchers by triggering a re-render of the VoucherList component
    // This can be done by incrementing the current page number or any other way to indicate a change
    SetReload(!reload);
  };

  const confirm = async (id) => {
    NotiModalOrder.confirm({
      maskClosable: true,
      title: "Bạn có muốn xóa nhân viên này không?",
      icon: <BsExclamationCircle />,
      content: "Khi bạn nhấn đồng ý, nhân viên sẽ bị xóa vĩnh viễn",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: async () => {
        const token = localStorage.getItem("Authorization");
        const res = await orderManagementApi.deleteOrder(id, token);
        if (res.status === 200) {
          toastSuccess("Delete Order Succesfully");
          setSearch(search);
        } else {
          toastError("Delete Order Failed");
        }
        handleOrderDeleted();
      },
    });
  };

  return (
    <Container>
      <Hero>Order Management</Hero>

      <DashBoard>
        <Right>
          {report &&
            ticketTypes.map((ticket, index) => {
              const IconComponent = ticket.icon;
              return (
                <IconContext.Provider key={index} value={{ size: "1.5em" }}>
                  <Card color={ticket.color}>
                    <Icon color={ticket.color}>
                      {" "}
                      <IconComponent />
                    </Icon>
                    <Title>{ticket.name}</Title>

                    <AnimatedNumbers
                      animateToNumber={
                        index == 0
                          ? report.numberOfProcessedTickets +
                            report.numberOfUnprocessedTickets
                          : index == 1
                          ? report.numberOfUnprocessedTickets
                          : report.numberOfProcessedTickets
                      }
                      fontStyle={{ fontSize: 32 }}
                      configs={(number, index) => {
                        return {
                          mass: 1,
                          tension: 230 * (index + 1),
                          friction: 140,
                        };
                      }}
                    ></AnimatedNumbers>
                  </Card>
                </IconContext.Provider>
              );
            })}
        </Right>
      </DashBoard>
      <Divider />
      <Action setOpenAdd={setOpenAdd} openAdd={openAdd} />
      {openAdd && <AddOrder setLoaded={setLoaded} />}
      <Divider />
      <OrderTable
        orders={orders}
        reload={reload}
        setOrders={setOrders}
        columns={columns}
        setCurrent={setCurrent}
        current={current}
        search={search}
      />
    </Container>
  );
};

export default OrderManagemntPage;
