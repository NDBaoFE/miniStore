// eslint-disable-next-line react/prop-types
import { useEffect } from "react";
import { useState } from "react";
import notifyApi from "../../utils/api/notifyApi";
import "./notifistyle.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { actions } from "./slice";



const Notification = () => {
  const {id} = useParams()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    // Fetch the notification details using the ID
    async function fetchData(){
      try{
        const response = await notifyApi.getNotifyDetail(id,token);
        const notificationData = response.data.data;
    
        // Update the state variables
        setTitle(notificationData.title);
        setContent(notificationData.description);
        
        dispatch(actions.setNotification(notificationData));
        dispatch(actions.getNotificationInfo());
 
      }catch (error){
        console.error(error)
      }
    }
    fetchData()
  }, [dispatch, id,token]);

  

  return (
    <div className="wrapper-noti-detail">
      <div className="wrapper-noti-above">
      <div className="content">Title:</div>
        <div className="title-content">{title}</div>
        </div>
      <div className="wrapper-noti-below">
        <div className="content">Content:</div>
        <div className="content-content">{content}</div>
      </div>

      <button className="back-to-home-btn" > <Link to={`/home`} style={{color: "white"}}>  Back to home</Link></button>
    </div>
  );
};

export default Notification;