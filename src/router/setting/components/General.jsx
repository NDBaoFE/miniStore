import {
  Container,
  GeneralIcon,
  WrapperIntroduction,
  IntroTitle,
  ColorIntroTitle,
  Left,
  Row,
  StyledForm,
  WrapperIndentication,
  IndenticationTitle,
  Right,Address,
  ContactDetail,Currency
} from "./style";
import { Col, Select } from "antd";
import { Input } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const General = () => {
  return (
    <Container>
      <WrapperIntroduction>
        <GeneralIcon></GeneralIcon>
        <IntroTitle>
          <ColorIntroTitle>General Info</ColorIntroTitle>
          <br />
          Provide details about your business
        </IntroTitle>
      </WrapperIntroduction>

      <StyledForm>
        <Left>
          <WrapperIndentication>
            <IndenticationTitle>INDENTICATION</IndenticationTitle>

            <Row>
              <Col span={22}>
                <Input placeholder="Business name" />
              </Col>
            </Row>

            <Row>
              <Col span={22}>
                <Input placeholder="owner or corporate nam" />
              </Col>
            </Row>
            <Row>
              <Col span={22}>
                <Input placeholder="CPF or CNPJ" />
              </Col>
            </Row>
          </WrapperIndentication>

          <ContactDetail>
            <IndenticationTitle>CONTACT DETAILS</IndenticationTitle>

            <Row>
              <Col span={5}>
                <Select
                  placeholder="Country"
                  onChange={onChange}
                  options={[
                    {
                      value: "+84",
                      label: "VN (+84)",
                    },
                    {
                      value: "+1",
                      label: "ENG (+1)",
                    },
         
                  ]}
                />
              </Col>

              <Col span={13} style={{marginRight: 50}}>
                <Input placeholder="Phone" />
              </Col>
            </Row>

            <Row>
              <Col span={21}>
                <Input placeholder="Email" />
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <Input placeholder="Instagram" />
              </Col>
            </Row>
          </ContactDetail>

        </Left>

        <Right>
          <Address>
            <IndenticationTitle>ADDRESS</IndenticationTitle>

            <Row>
              <Col span={22}>
                <Input placeholder="Address"/>
              </Col>
            </Row>

            <Row>
              <Col span={22}>
                <Input placeholder="Address"/>
              </Col>
            </Row>
            
          </Address>

          <Currency>
            <IndenticationTitle>CURRENCY</IndenticationTitle>

            <Row>
              <Col span={20} >
                <Select
                
                  placeholder="Country"
                  onChange={onChange}
                  options={[
                    {
                      value: "$",
                      label: "US ($)",
                    },
                    {
                      value: "VND",
                      label: "VN (VND)",
                    },

                  ]}
                />
              </Col>
            </Row>
          </Currency>
        </Right>
      </StyledForm>
    </Container>
  );
};

export default General;
