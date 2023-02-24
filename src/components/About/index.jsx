import YouTube from 'react-youtube';
import './style.css';

import {
  ADD_SECTION,
  MIDDLE_SECTION,
  NEXT_SECTION,
  THEN_SECTION
} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="PassionClub" />
    </div>
  );
}

function PrizeSectionAbout() {
  return (
    <div className="PrizeSectionAbout">
      <h1>{NEXT_SECTION.TITLE}</h1>
      <p>{NEXT_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Laga() {
  return (
    <div className="lagaS">
      <img className="Laga" src={NEXT_SECTION.LOGO} alt="allClub" />
    </div>
  );
}

function WorkSectionAbout() {
  return (
    <div className="WorkSectionAbout">
      <h1>{THEN_SECTION.TITLE}</h1>
      <p>{THEN_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Lege() {
  return (
    <div className="legeS">
      <img className="Lege" src={THEN_SECTION.LOGO} alt="allMem" />
    </div>
  );
}

function AddSectionAbout() {
  return (
    <div className="AddSectionAbout">
      <h1>{ADD_SECTION.TITLE}</h1>
      <p>{ADD_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Ligi() {
  // return (
  //   <div className="ligiS">
  //     <img className="Ligi" src={ADD_SECTION.LOGO} alt="allWe" />
  //   </div>
  // );

  const videoId = 'IacbU7dVMAY';
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

export {
  Logo,
  LogoSectionAbout,
  PrizeSectionAbout,
  Laga,
  WorkSectionAbout,
  Lege,
  Ligi,
  AddSectionAbout
};
