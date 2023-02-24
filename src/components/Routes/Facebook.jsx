import {useEffect} from 'react';

function Facebook() {
  useEffect(() => {
    window.location.href = 'https://www.facebook.com/PCuet';
  }, []);
  return <div></div>;
}

export default Facebook;
