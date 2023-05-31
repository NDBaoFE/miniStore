import { NavBarUser } from "../../components/NavBar/navbarindex";
import "./aboutusstyle.css";
const AboutUS = () => {
  return (
    <div className="aboutus-container">
      <NavBarUser />
      <div className="name-brand">MiniStore</div>
      <div className="wrap-about-content-1">
        <div className="name">MiniStore</div>
        <p className="about-content-1">
          is a major formatted project to be processed until 8/5/2023. The goal
          is to bring convenient products to customers in an easy and friendly
          way.
        </p>
        <img className="about-img-1" src="src\assets\img\about-img-1.jpg" alt="" />
      </div>

      <div className="wrap-about-content-2">
      <img className="about-img-2" src="src\assets\img\about-img-2.jpg" alt="" />
      <div className="name-2">MiniStore</div>
      <p className="about-content-2">
          is a major formatted project to be processed until 8/5/2023. The goal
          is to bring convenient products to customers in an easy and friendly
          way.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
