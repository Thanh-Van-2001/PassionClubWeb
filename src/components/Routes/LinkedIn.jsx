import { useEffect } from 'react';

function Linkedin() {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/company/passion-club/';
  }, []);
  return <div></div>;
}

export default Linkedin;
