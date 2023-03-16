import YouTube from 'react-youtube';
import './style.css';

import {
  HOLA,
  LIVE_SHOW,
  ROCOCO,
  TUA_RADIO,
  TUYEN_QUAN
} from '../../Module/Gen10';

function G10_1() {
  return (
    <div className="G11_1">
      <h1>{TUYEN_QUAN.TITLE}</h1>
      <p>{TUYEN_QUAN.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I10_1() {
  return (
    <div className="I10_1S">
      <img className="I10_1" src={TUYEN_QUAN.LOGO} alt="tuyenquan" />
    </div>
  );
}

function G10_2() {
  return (
    <div className="G10_2">
      <h1>{TUA_RADIO.TITLE}</h1>
      <p>{TUA_RADIO.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I10_2() {
  // return (
  //   <div className="I11_3S">
  //     <img className="I11_3" src={LIVE_SHOW.LOGO} alt="liveshow" />
  //   </div>
  // );
  const videoId = '7zpUmBiOfbI';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <div className="I10_2S">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
function G10_3() {
  return (
    <div className="G10_3">
      <h1>{LIVE_SHOW.TITLE}</h1>
      <p>{LIVE_SHOW.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I10_3() {
  return (
    <div className="I10_3S">
      <img className="I10_3" src={LIVE_SHOW.LOGO} alt="liveshow" />
    </div>
  );
}

function G10_4() {
  return (
    <div className="G10_4">
      <h1>{ROCOCO.TITLE}</h1>
      <p>{ROCOCO.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I10_4() {
  return (
    <div className="I10_4S">
      <img className="I10_4" src={ROCOCO.LOGO} alt="rococo" />
    </div>
  );
}

function G10_5() {
  return (
    <div className="G10_5">
      <h1>{HOLA.TITLE}</h1>
      <p>{HOLA.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I10_5() {
  return (
    <div className="I10_5S">
      <img className="I10_5" src={HOLA.LOGO} alt="hola" />
    </div>
  );
}

export {G10_1, I10_1, G10_2, I10_2, G10_3, I10_3, G10_4, I10_4, G10_5, I10_5};
