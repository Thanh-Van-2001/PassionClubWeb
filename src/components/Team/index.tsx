import React from 'react';
import {Btn} from '../Landing/index.jsx';
import './style.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
};

const Member = ({info}: {info: any}) => {
  const {facebook, role, name, img, instagram} = info;
  return (
    <div className="member">
      <img src={img} alt="Passion Club"></img>
      <div className="members-link">
        <h3>{name}</h3>
        <p>{role}</p>
        <a href={facebook}>
          <i className="fab fa-2x fa-facebook"></i>
        </a>
        <a href={instagram}>
          <i className="fab fa-2x fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export {Member, JoinTeam};
