import YouTube from 'react-youtube';
import './style.css';

import {
  CON_TEST,
  HOLA,
  LITTLE_THINGS,
  LIVE_SESSION,
  LIVE_SHOW,
  TUYEN_QUAN
} from '../../Module/Gen11';

function G11_1() {
  return (
    <div className="G11_1">
      <h1>{TUYEN_QUAN.TITLE}</h1>
      <p>{TUYEN_QUAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_1() {
  return (
    <div className="I11_1S">
      <img className="I11_1" src={TUYEN_QUAN.LOGO} alt="tuyenquan" />
    </div>
  );
}

function G11_2() {
  return (
    <div className="G11_2">
      <h1>{CON_TEST.TITLE}</h1>
      <p>{CON_TEST.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_2() {
  return (
    <div className="I11_2S">
      <img className="I11_2" src={CON_TEST.LOGO} alt="contest" />
    </div>
  );
}

function G11_3() {
  return (
    <div className="G11_3">
      <h1>{LIVE_SHOW.TITLE}</h1>
      <p>{LIVE_SHOW.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_3() {
  return (
    <div className="I11_3S">
      <img className="I11_3" src={LIVE_SHOW.LOGO} alt="liveshow" />
    </div>
  );
}

function G11_4() {
  return (
    <div className="G11_4">
      <h1>{HOLA.TITLE}</h1>
      <p>{HOLA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_4() {
  return (
    <div className="I11_4S">
      <img className="I11_4" src={HOLA.LOGO} alt="hola" />
    </div>
  );
}

function G11_5() {
  return (
    <div className="G11_5">
      <h1>{LIVE_SESSION.TITLE}</h1>
      <p>{LIVE_SESSION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_5() {
  const videoId = 'eapVFZvPCok';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

function G11_6() {
  return (
    <div className="G11_6">
      <h1>{LITTLE_THINGS.TITLE}</h1>
      <p>{LITTLE_THINGS.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I11_6() {
  const videoId = '0nurSMKsNds';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
export {
  G11_1,
  I11_1,
  G11_2,
  I11_2,
  G11_3,
  I11_3,
  G11_4,
  I11_4,
  G11_5,
  I11_5,
  G11_6,
  I11_6
};
