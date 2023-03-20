import YouTube from 'react-youtube';
import './style.css';

import {
  BAMI_BER,
  DU_CA,
  HOLA,
  HUMAN,
  LIVE_SHOW,
  SINH_NHAT,
  THU_AM,
  TUYEN_QUAN
} from '../../Module/Gen8';

function G8_1() {
  return (
    <div className="G8_1">
      <h1>{BAMI_BER.TITLE}</h1>
      <p>{BAMI_BER.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_1() {
  const videoId = 'gJBqzWmr7YU';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div className="I8_1S">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

function G8_2() {
  return (
    <div className="G8_2">
      <h1>{TUYEN_QUAN.TITLE}</h1>
      <p>{TUYEN_QUAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_2() {
  return (
    <div className="I8_2S">
      <img className="I8_2" src={TUYEN_QUAN.LOGO} alt="tuyenquan" />
    </div>
  );
}
function G8_3() {
  return (
    <div className="G8_3">
      <h1>{LIVE_SHOW.TITLE}</h1>
      <p>{LIVE_SHOW.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_3() {
  return (
    <div className="I8_3S">
      <img className="I8_3" src={LIVE_SHOW.LOGO} alt="liveshow" />
    </div>
  );
}

function G8_4() {
  return (
    <div className="G8_4">
      <h1>{DU_CA.TITLE}</h1>
      <p>{DU_CA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_4() {
  return (
    <div className="I8_4S">
      <img className="I8_4" src={DU_CA.LOGO} alt="duca" />
    </div>
  );
}

function G8_5() {
  return (
    <div className="G8_5">
      <h1>{HOLA.TITLE}</h1>
      <p>{HOLA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_5() {
  return (
    <div className="I8_5S">
      <img className="I8_5" src={HOLA.LOGO} alt="hola" />
    </div>
  );
}

function G8_6() {
  return (
    <div className="G8_6">
      <h1>{THU_AM.TITLE}</h1>
      <p>{THU_AM.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_6() {
  return (
    <div className="I8_6S">
      <img className="I8_6" src={THU_AM.LOGO} alt="thu" />
    </div>
  );
}

function G8_7() {
  return (
    <div className="G8_7">
      <h1>{HUMAN.TITLE}</h1>
      <p>{HUMAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_7() {
  return (
    <div className="I8_7S">
      <img className="I8_7" src={HUMAN.LOGO} alt="human" />
    </div>
  );
}

function G8_8() {
  return (
    <div className="G8_8">
      <h1>{SINH_NHAT.TITLE}</h1>
      <p>{SINH_NHAT.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I8_8() {
  return (
    <div className="I8_8S">
      <img className="I8_8" src={SINH_NHAT.LOGO} alt="sinhnhat" />
    </div>
  );
}

export {
  G8_1,
  I8_1,
  G8_2,
  I8_2,
  G8_3,
  I8_3,
  G8_4,
  I8_4,
  G8_5,
  I8_5,
  G8_6,
  I8_6,
  G8_7,
  I8_7,
  G8_8,
  I8_8
};
