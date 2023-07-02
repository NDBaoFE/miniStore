// eslint-disable-next-line react/prop-types
const Notification = ({ title, description, timestamp }) => {
    return (
      <div className="notification">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{timestamp}</span>
      </div>
    );
  };
  
  export default Notification;