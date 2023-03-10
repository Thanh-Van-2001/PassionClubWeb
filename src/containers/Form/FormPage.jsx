import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Btn, Myinfo} from '../../components/Landing/index.jsx';
import {PrizeHeading} from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  FacebookVideo,
  I1,
  I2,
  R1,
  R2,
  R3
} from '../../components/Timeline/index.jsx';
import {TOP_SECTION} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import bestclub from './assets/bestclub.png';
import pattern from './assets/pattern4.png';

export default function FormPage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div
        className="color_sectiom"
        id="home"
        style={{backgroundImage: `url(${bestclub})`}}
      >
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <R1 />
            <a href={TOP_SECTION.DIRECT_GGFORM_LINK}>
              {' '}
              <Btn
                class="sponsor_btn"
                type="Đăng ký ngay"
                overlay="Điền thông tin"
              />
            </a>
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I1 />
          </Col>
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I2 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <R2 />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={8}>
            <R3 />
          </Col>
          <Col className="info-div" sm={2} lg={4} md={2}>
            <FacebookVideo />
          </Col>
        </Row>
        {media && <Birds top="120vh" left="0vh" type="" />}
        {media && <Birds top="220vh" left="0vh" type="" />}
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        <Row className="prizesection register-form">
          <PrizeHeading type="Đơn đăng ký thành viên Gen 12" />
          {/* <h3>Hãy điền đơn thật chính xác và chi tiết nhé</h3> */}
          <a href={TOP_SECTION.DIRECT_GGFORM_LINK}>
            {' '}
            <Btn
              class="sponsor_btn"
              type="Đăng ký ngay"
              overlay="Điền thông tin"
            />
          </a>
          <br />
          &nbsp;
          <br />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
