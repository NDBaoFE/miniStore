import Notification from './Notification';

// eslint-disable-next-line react/prop-types
const NotificationsList = ({ notifications }) => {
  return (
    <div className="notifications-list">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          title={notification.title}
          description={notification.description}
          timestamp={notification.timestamp}
        />
      ))}
    </div>
  );
};

export default NotificationsList;