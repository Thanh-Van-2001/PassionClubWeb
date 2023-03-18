import YouTube from 'react-youtube';
import './style.css';

import {
  DU_CA,
  LIVE_SHOW,
  LODESTAR,
  PIC_NIC,
  TANT,
  TUYEN_QUAN,
  VE_THI_CA
} from '../../Module/Gen9';

function G9_1() {
  return (
    <div className="G9_1">
      <h1>{VE_THI_CA.TITLE}</h1>
      <p>{VE_THI_CA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_1() {
  return (
    <div className="I9_1S">
      <img className="I9_1" src={VE_THI_CA.LOGO} alt="vethica" />
    </div>
  );
}

function G9_2() {
  return (
    <div className="G9_2">
      <h1>{TUYEN_QUAN.TITLE}</h1>
      <p>{TUYEN_QUAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_2() {
  return (
    <div className="I9_2S">
      <img className="I9_2" src={TUYEN_QUAN.LOGO} alt="tuyenquan" />
    </div>
  );
}
function G9_3() {
  return (
    <div className="G9_3">
      <h1>{LIVE_SHOW.TITLE}</h1>
      <p>{LIVE_SHOW.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_3() {
  return (
    <div className="I9_3S">
      <img className="I9_3" src={LIVE_SHOW.LOGO} alt="liveshow" />
    </div>
  );
}

function G9_4() {
  return (
    <div className="G9_4">
      <h1>{DU_CA.TITLE}</h1>
      <p>{DU_CA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_4() {
  return (
    <div className="I9_4S">
      <img className="I9_4" src={DU_CA.LOGO} alt="duca" />
    </div>
  );
}

function G9_5() {
  return (
    <div className="G9_5">
      <h1>{PIC_NIC.TITLE}</h1>
      <p>{PIC_NIC.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_5() {
  return (
    <div className="I9_5S">
      <img className="I9_5" src={PIC_NIC.LOGO} alt="picnic" />
    </div>
  );
}

function G9_6() {
  return (
    <div className="G9_6">
      <h1>{TANT.TITLE}</h1>
      <p>{TANT.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_6() {
  const videoId = 'HaVfUDuG8PM';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <div className="I9_6S">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

function G9_7() {
  return (
    <div className="G9_7">
      <h1>{LODESTAR.TITLE}</h1>
      <p>{LODESTAR.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I9_7() {
  return (
    <div className="I9_7S">
      <img className="I9_7" src={LODESTAR.LOGO} alt="lodestar" />
    </div>
  );
}

export {
  G9_1,
  I9_1,
  G9_2,
  I9_2,
  G9_3,
  I9_3,
  G9_4,
  I9_4,
  G9_5,
  I9_5,
  G9_6,
  I9_6,
  G9_7,
  I9_7
};
