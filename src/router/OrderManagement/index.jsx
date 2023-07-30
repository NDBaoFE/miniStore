import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Divider, Button } from "antd";
import { Card, Container, DashBoard, Hero, Icon, Right, Title } from "./style";
import { orderTypes } from "./components/dataOrder";
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

import { formatNumberWithDecoration } from "../../utils";






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


  const [loopOrder, setLoopOrder] = useState([])
  const [order, setOrder] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllOrder(token);
        setOrder(response.data.data);
        const processedTickets = await response.data.data.length;

        const unprocessedTickets = await response.data.data.length;
        setReport({
          numberOfProcessedTickets: processedTickets,
          numberOfUnprocessedTickets: unprocessedTickets,
        });
        if (processedTickets == [] && unprocessedTickets == []) {
          setTickets([]);
        } else if (processedTickets == []) {
          setTickets(unprocessedTickets);
        } else if (unprocessedTickets == []) {
          setTickets(processedTickets);
        } 
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [loaded, current, reload, token]);




    let total = 0
    for(let item of order ){
      total += item.total;
    }



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
      render: (_, record) => <span style={{color:"green", fontWeight:600}}>{formatNumberWithDecoration(record.total)} VND</span>,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",

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
      title: "Do you want to rollback this order",
      icon: <BsExclamationCircle />,
      content: "Click 'Confirm' to rollback this order",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: async () => {
        const token = localStorage.getItem("Authorization");
        const res = await orderManagementApi.deleteOrder(id, token);
        if (res.status === 200) {
          toastSuccess(res.data.message);
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
            orderTypes.map((ticket, index) => {
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
                          ? report.numberOfProcessedTickets 
                          : index == 1
                          ? total
                          : 0
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
