import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  AddSectionAbout,
  Laga,
  Lege,
  Ligi,
  Logo,
  LogoSectionAbout,
  PrizeSectionAbout,
  WorkSectionAbout
} from '../../components/About/index.jsx';
import {Accordion} from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {JoinTeam, Member} from '../../components/Team';
import {frequentlyAskedQuestions} from '../../Module/Faq';
import {
  BoardOfDirectors,
  ClubStructure,
  DevTeam,
  FOOTER,
  sponsorLogos,
  TOP_SECTION
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import full from './assets/fulls.png';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
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

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
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
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <Logo />
          </Col>
          <Col className="info-div" sm={2} lg={5} md={2}>
            <Laga />
          </Col>
          <Col className="info-div" sm={12} lg={7} md={2}>
            <PrizeSectionAbout />
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
            <WorkSectionAbout />
          </Col>
          <Col className="info-div" sm={2} lg={2} md={2}>
            <Lege />
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
          <Col className="info-div" sm={2} lg={6} md={2}>
            <Ligi />
          </Col>
          <Col className="info-div" sm={12} lg={6} md={2}>
            <AddSectionAbout />
          </Col>
        </Row>
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        {/* ********Frequently asked Questions here ***** */}
        <h1 id="faq">Các câu hỏi thường gặp</h1>
        <h3 id="faq">
          Nếu bạn có thắc mắc nào khác, hãy inbox fanpage của chúng mình nhé
        </h3>
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
        <br />
        &nbsp;
        <br />
        <br />
        &nbsp;
        <br />
        {/* ********ClubStructure here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Cơ cấu tổ chức" />
          {ClubStructure.map(PrizeGroup)}
        </Row>
        {/* ********Structure ending here ***** */}
        <Row className="prizesection non-coding">
          <PrizeHeading type="Các sự kiện" />

          <h2>coming soon</h2>
        </Row>
        {/* ********Events here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}
        {media && <Birds top="120vh" left="0vh" type="" />}
        {media && <Birds top="220vh" left="0vh" type="" />}
        {/* ********Team here ***** */}
        <h1 id="team">Ban chủ nhiệm</h1>
        {BoardOfDirectors.map(TeamMembers)}
        {/* ********Directors ending here ***** */}
        {/* ********Dev team here ***** */}
        <br />
        &nbsp;
        <br />
        <h1 id="team">Đội ngũ phát triển</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={TOP_SECTION.JUDGES_FORM_LINK}
            // content="Cùng nhau phát triển website"
          />
        )}
        {DevTeam.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
