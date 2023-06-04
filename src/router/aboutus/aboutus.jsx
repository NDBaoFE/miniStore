import { NavBarUser } from "../../components/NavBar/navbarindex";
import {
  IMG,
  IMG2,
  WrapContent2,
  AboutContent1,
  WrapIMG,
  Name1,
  BrandName,
  WrapContent1,
  WrapIMG2,
  AboutContent2,Name2,MessageUs,WrapMessage
  ,MailIcon,MessageForm,InputMessageForm,
} from "./aboutusstyle";
import store from "../../assets/image/about-img-1.jpg"
import {EnterOutlined} from '@ant-design/icons';

import { Form} from "antd";

const AboutUS = () => {
  return (
    <div className="aboutus-container">
      <NavBarUser />
      <BrandName>MiniStore</BrandName>

      <WrapContent1>
        <Name1>
          MiniStore
          <AboutContent1>
            is a major formatted project to be processed until 8/5/2023. The
            goal is to bring convenient products to customers in an easy and
            friendly way.
          </AboutContent1>
        </Name1>

        <WrapIMG>
          <IMG src={store} alt="" />
        </WrapIMG>
      </WrapContent1>

      <WrapContent2>
        <WrapIMG2>
          <IMG2
            className="about-img-2"
            src="miniStore\src\assets\image\about-img-2.jpg"
            alt=""
          />
        </WrapIMG2>
        <Name2>
          MiniStore
          <AboutContent2>
            provide goods and services with diversity, uniqueness and difference
            This system provides differentiated products and services in the
            development of fresh, delicious, high-quality and safe food
            products..
          </AboutContent2>
        </Name2>
      </WrapContent2>

      <WrapMessage>
        <MailIcon />
        <MessageUs>
          Sign up to receive the newest information about us
        </MessageUs>

        <MessageForm>
        
            <Form.Item htmlFor="email">
              <InputMessageForm
                id="email"
                type="text"
                placeholder="Enter your email"
                className="input-email"
                suffix={<EnterOutlined />}
              />
            </Form.Item>
          
        </MessageForm>
      </WrapMessage>
    </div>
  );
};

export default AboutUS;
