import YouTube from 'react-youtube';
import './style.css';

import {ROUND_1, ROUND_2, ROUND_3} from '../../Module/Recruit';

function R1() {
  return (
    <div className="R1">
      <h1>{ROUND_1.TITLE}</h1>
      <p>{ROUND_1.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I1() {
  return (
    <div className="I1S">
      <img className="I1" src={ROUND_1.LOGO} alt="vong1" />
    </div>
  );
}

function R2() {
  return (
    <div className="R2">
      <h1>{ROUND_2.TITLE}</h1>
      <p>{ROUND_2.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I2() {
  return (
    <div className="I2S">
      <img className="I2" src={ROUND_2.LOGO} alt="vong2" />
    </div>
  );
}

function R3() {
  return (
    <div className="R3">
      <h1>{ROUND_3.TITLE}</h1>
      <p>{ROUND_3.LONG_DESCRIPTION}</p>
    </div>
  );
}

function I3() {
  return (
    <div className="I3S">
      <img className="I3" src={ROUND_3.LOGO} alt="vong3" />
    </div>
  );
}

function FacebookVideo() {
  const videoId = '4Y7Nq5T2dto';
  const opts = {
    width: '480',
    height: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export {I1, R1, R2, I2, R3, I3, FacebookVideo};
