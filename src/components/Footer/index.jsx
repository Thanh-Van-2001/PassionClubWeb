import {useEffect, useState} from 'react';
// import { Btn } from '../../components/Landing/index.jsx';
import {TOP_SECTION} from '../../Module/General';
import cross from './assets/cross.svg';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Cùng{' '}
          <a href={TOP_SECTION.PASSION_CLUB_REGISTRATION_FORM_LINK}>
            Passion Club{' '}
          </a>
          cháy hết mình với tuổi thanh xuân nhé 🔥
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        {/* Nếu muốn thêm các icon nhúng link mạng xã hội thì uncommment 
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.tiktok}>
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div> */}
        {/* <div className="Register_a">
           <a href={TOP_SECTION.JUDGES_FORM_LINK}>
            <Btn type="Tuyển thành viên" overlay="Điền thông tin" />
          </a> 
           {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )} 
        </div> */}
        <div className="footer_info">
          <div class="row">
            <div class="col-md-4 px-md-1">
              <h4>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h4>
              <a href="https://www.youtube.com/watch?v=IacbU7dVMAY&list=PLtd07R83OU2d3ddiS6_R3pvJLHq3SMjsp">
                <p>📻 PC's live session</p>
              </a>
              <a href="https://www.youtube.com/watch?v=7zpUmBiOfbI">
                <p>📻 Series Tựa Radio</p>
              </a>
              <a href="https://www.facebook.com/watch/463444960365466/798490580876134">
                <p>📻 Music Contest: Thanh âm ngày Tết</p>
              </a>
              <a href="https://www.facebook.com/watch/463444960365466/429180421265539">
                <p>📻 PC's Saturday</p>
              </a>
            </div>

            <div class="col-md-4 px-md-1">
              <h4>LIÊN HỆ</h4>
              <p>🏠 144 Xuân Thủy, Cầu Giấy, Hà Nội</p>
              <a href="https://www.facebook.com/PCuet">
                <p>🌐 https://www.facebook.com/PCuet</p>
              </a>
              <p>📧 pc.uet.vnu@gmail.com</p>
              <p>☎️ 035 226 7031</p>
            </div>
            <div class="col-md-4 px-md-1">
              <h4>TRƯỜNG ĐHCN-ĐHQGHN</h4>
              <a href="https://uet.vnu.edu.vn/">
                <p>🌐 Website của trường</p>
              </a>
              <a href="https://www.facebook.com/PhongCTSV.DHCN.VNU">
                <p>🌐 Phòng công tác sinh viên</p>
              </a>
              <a href="https://www.facebook.com/DTNHSV.UET.VNU">
                <p>🌐 Đoàn Thanh niên - Hội Sinh viên </p>
              </a>
              <a href="https://www.facebook.com/ChaoTanSinhvien.UET">
                <p>🌐 Ngày hội CLB</p>
              </a>
            </div>
          </div>
        </div>
        {/* {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )} */}
      </div>
    </div>
  );
};

export default Footer;
