import YouTube from 'react-youtube';
import './style.css';

import {
  CONTEST,
  DU_LICH,
  GOT_TALENT,
  HOLA,
  SINH_NHAT,
  TUYEN_QUAN
} from '../../Module/Gen7';

function G7_1() {
  return (
    <div className="G7_1">
      <h1>{GOT_TALENT.TITLE}</h1>
      <p>{GOT_TALENT.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_1() {
  const videoId = 'tM3VoarftQE';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div className="I7_1S">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

function G7_2() {
  return (
    <div className="G7_2">
      <h1>{TUYEN_QUAN.TITLE}</h1>
      <p>{TUYEN_QUAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_2() {
  return (
    <div className="I7_2S">
      <img className="I7_2" src={TUYEN_QUAN.LOGO} alt="tuyenquan" />
    </div>
  );
}
function G7_3() {
  return (
    <div className="G7_3">
      <h1>{HOLA.TITLE}</h1>
      <p>{HOLA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_3() {
  return (
    <div className="I7_3S">
      <img className="I7_3" src={HOLA.LOGO} alt="hola" />
    </div>
  );
}

function G7_4() {
  return (
    <div className="G7_4">
      <h1>{DU_LICH.TITLE}</h1>
      <p>{DU_LICH.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_4() {
  return (
    <div className="I7_4S">
      <img className="I7_4" src={DU_LICH.LOGO} alt="dulich" />
    </div>
  );
}

function G7_5() {
  return (
    <div className="G7_5">
      <h1>{CONTEST.TITLE}</h1>
      <p>{CONTEST.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_5() {
  const videoId = 'jzhrUy-u_Fw';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div className="I7_5S">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

function G7_6() {
  return (
    <div className="G7_6">
      <h1>{SINH_NHAT.TITLE}</h1>
      <p>{SINH_NHAT.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I7_6() {
  return (
    <div className="I7_6S">
      <img className="I7_6" src={SINH_NHAT.LOGO} alt="sn" />
    </div>
  );
}

export {G7_1, I7_1, G7_2, I7_2, G7_3, I7_3, G7_4, I7_4, G7_5, I7_5, G7_6, I7_6};
