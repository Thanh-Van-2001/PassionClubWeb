import {SOCIALS} from '../../Module/General';
import './style.css';

export default function Media() {
  return (
    <div className="media">
      <p>Theo dõi CLB chúng mình tại</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
          <i className="fab fa-3x fa-facebook"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.youtube}>
          <i className="fab fa-3x fa-youtube"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <i className="fab fa-3x fa-discord"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.tiktok}>
          <i className="fab fa-3x fa-tiktok"></i>
        </a>
      </div>
    </div>
  );
}
