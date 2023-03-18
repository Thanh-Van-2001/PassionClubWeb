import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {
  G9_1,
  G9_2,
  G9_3,
  G9_4,
  G9_5,
  G9_6,
  G9_7,
  I9_1,
  I9_2,
  I9_3,
  I9_4,
  I9_5,
  I9_6,
  I9_7
} from '../../components/Gen9/index.jsx';
import {Btn, Myinfo} from '../../components/Landing/index.jsx';
import {PrizeHeading} from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {Member} from '../../components/Team';
import {BoardOfDirectors} from '../../Module/Gen9';
import {TOP_SECTION} from '../../Module/General';
import './about.css';
import full from './assets/fulls.png';
import pattern from './assets/pattern4.png';
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function Gen9Page() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div
        className="color_sectiom"
        id="home"
        style={{backgroundImage: `url(${full})`}}
      >
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
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
          <h1> Gen9 - Vì sao vụt sáng 💫...</h1>
          <br />
          &nbsp;
          <br />
          <br />
          &nbsp;
          <br />
          <br />
          &nbsp;
          <br />
          <Col className="info-div" sm={12} lg={8} md={8}>
            <G9_1 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I9_1 />
          </Col>
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I9_2 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G9_2 />
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
          <Col className="info-div" sm={12} lg={8} md={8}>
            <G9_3 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I9_3 />
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
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I9_4 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G9_4 />
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={8}>
            <G9_5 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I9_5 />
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
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I9_6 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G9_6 />
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
            <br />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={8}>
            <G9_7 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I9_7 />
          </Col>
        </Row>
        {media && <Birds top="120vh" left="0vh" type="" />}
        {media && <Birds top="220vh" left="0vh" type="" />}
        {media && <Birds top="320vh" left="0vh" type="" />}
        {media && <Birds top="420vh" left="0vh" type="" />}
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
        <h1 id="team">Ban chủ nhiệm Gen9</h1>
        {BoardOfDirectors.map(TeamMembers)}
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
          <PrizeHeading type="Chuyện Gen8..." />
          {/* <h3>Hãy điền đơn thật chính xác và chi tiết nhé</h3> */}
          <a href={TOP_SECTION.PC_G10}>
            {' '}
            <Btn
              class="sponsor_btn"
              type="Cùng quay ngược thời gian"
              overlay="One year ago..."
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
