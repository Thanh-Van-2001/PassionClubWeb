import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {
  G8_1,
  G8_2,
  G8_3,
  G8_4,
  G8_5,
  G8_6,
  G8_7,
  G8_8,
  I8_1,
  I8_2,
  I8_3,
  I8_4,
  I8_5,
  I8_6,
  I8_7,
  I8_8
} from '../../components/Gen8/index.jsx';
import {Btn, Myinfo} from '../../components/Landing/index.jsx';
import {PrizeHeading} from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {Member} from '../../components/Team';
import {BoardOfDirectors} from '../../Module/Gen8';
import {TOP_SECTION} from '../../Module/General';
import './about.css';
import halo from './assets/duca.png';
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

export default function Gen8Page() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div
        className="color_sectiom"
        id="home"
        style={{backgroundImage: `url(${halo})`}}
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
          <h1> Gen8 - Bước chuyển mình mạnh mẽ</h1>
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
            <G8_1 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I8_1 />
          </Col>
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I8_2 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G8_2 />
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
            <G8_3 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I8_3 />
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
            <I8_4 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G8_4 />
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
            <G8_5 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I8_5 />
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
            <I8_6 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G8_6 />
            <br />
            <br />
            &nbsp;
            <br />
            <br />
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
            <G8_7 />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <I8_7 />
            <br />
            <br />
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            &nbsp;
            <br />
            <br />
          </Col>
          <Col className="info-div" sm={2} lg={5} md={2}>
            <I8_8 />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <G8_8 />
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
        <h1 id="team">Ban chủ nhiệm Gen8</h1>
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
          <PrizeHeading type="Chuyện Gen7..." />
          {/* <h3>Hãy điền đơn thật chính xác và chi tiết nhé</h3> */}
          <a href={TOP_SECTION.PC_G7}>
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
