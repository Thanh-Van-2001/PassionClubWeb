import {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import FormPage from '../Form/FormPage';
import Gen10Page from '../Gen10/Gen10Page';
import Gen11Page from '../Gen11/Gen11Page';
import Gen7Page from '../Gen7/Gen7Page';
import Gen8Page from '../Gen8/Gen8Page';
import Gen9Page from '../Gen9/Gen9Page';
import HomePage from '../Home/HomePage';
import passion from './assets/passion1.png';
import './styles.scss';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <a href="/">
                  <img src={passion} alt="PC logo" height="80" />
                </a>
              </li>
              <li>
                <Link to={`#home`}>
                  <span className="links">Trang chủ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">Cơ cấu </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">Đồng hành </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">Ban chủ nhiệm </span>{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
      </nav>

      <Switch>
        <Route path="/form" exact={true}>
          <FormPage />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/gen11" exact={true}>
          <Gen11Page />
        </Route>
        <Route path="/gen10" exact={true}>
          <Gen10Page />
        </Route>
        <Route path="/gen9" exact={true}>
          <Gen9Page />
        </Route>
        <Route path="/gen8" exact={true}>
          <Gen8Page />
        </Route>
        <Route path="/gen7" exact={true}>
          <Gen7Page />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
