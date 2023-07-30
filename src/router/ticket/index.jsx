import { useEffect, useState } from 'react';

import { Divider, Image } from "antd";
import { Card, Container, DashBoard, Email, Hero, Icon, Left, Name, Right, Title } from "./style";
import { ticketTypes } from "./components/data";
import { IconContext } from "react-icons";
import Action from "./components/Action";
import TicketTable from "./components/TicketTable";
import AddTicket from "./components/AddTicket";
import productApi from '../../utils/api/productApi';
import AnimatedNumbers from "react-animated-numbers";
import useAuth from '../../utils/useAuth';

function TicketPage() { 
  const {profile}=useAuth();

  const [openAdd,setOpenAdd]=useState(false);
  const [tickets,setTickets]=useState([]);
  const [loaded,setLoaded]=useState(false);
  const [report,setReport]=useState(null);
  const token=localStorage.getItem("Authorization");
  useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getAllTicket(token);
            const processedTickets= await response.data.data.processedTickets;

            const unprocessedTickets= await response.data.data.unprocessedTickets;
            setReport({
                numberOfProcessedTickets:processedTickets.length,
                numberOfUnprocessedTickets:unprocessedTickets.length,
            })
            if(processedTickets == [] && unprocessedTickets == []){
                setTickets([]);
            }else if(processedTickets == []){
                setTickets(unprocessedTickets);
            
            }else if(unprocessedTickets == []){
            
                setTickets(processedTickets);
            
            }else{

              let array=[...processedTickets,...unprocessedTickets];
              setTickets(array);
            }
          
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [loaded,token]);
  return (
    <Container>
      <Hero>DashBoard</Hero>

      <DashBoard>
        <Left>
          { profile && <><Image src={profile.userImg} />
          <Name>{profile.name}</Name>
          <Email>{profile.email}</Email></>}
          
        </Left>

        <Right>
          { report && ticketTypes.map((ticket, index) => {
            const IconComponent=ticket.icon;
            return( <IconContext.Provider key={index} value={{ size: "1.5em" }}>
            <Card color={ticket.color}>
                <Icon color={ticket.color}>   <IconComponent/></Icon>
              <Title>{ticket.name}</Title>
              <AnimatedNumbers
        animateToNumber={index == 0 ? report.numberOfProcessedTickets+report.numberOfUnprocessedTickets : index == 1 ? report.numberOfUnprocessedTickets: report.numberOfProcessedTickets}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
            </Card>
          </IconContext.Provider>)
           
})}
        </Right>
      </DashBoard>
      <Divider/>
      <Action setOpenAdd={setOpenAdd} openAdd={openAdd}/>
      {openAdd && <AddTicket   setLoaded={setLoaded}/>}
      <Divider/>
      <TicketTable tickets={tickets} />
    </Container>
  );
}

export default TicketPage;
