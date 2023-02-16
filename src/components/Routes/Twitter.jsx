import { useEffect } from 'react';

function Twitter() {
  useEffect(() => {
    window.location.href = 'https://twitter.com/PassionClub';
  }, []);
  return <div></div>;
}

export default Twitter;
