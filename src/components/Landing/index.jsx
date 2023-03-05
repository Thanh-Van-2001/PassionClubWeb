import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
          <Btn
            ico="fab fa-2x fa-facebook"
            class="join_disco"
            type="Fanpage"
            overlay="Click the link"
          />
        </a>
      </div>
      <div className="buttom-group">
        <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn
            class="sponsor_btn"
            type="Tuyển thành viên"
            overlay="Điền thông tin"
          />
        </a>

        <a href={TOP_SECTION.PASSION_CLUB_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Hỗ trợ truyền thông"
            overlay="Điền thông tin"
          />
        </a>
      </div>
    </div>
  );
};

export {Btn, Myinfo};
