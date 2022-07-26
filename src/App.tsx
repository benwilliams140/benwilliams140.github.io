import * as React from 'react';
import LandingPage from './pages/LandingPage';

const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem));
};

const App = () => <LandingPage isMobile={isMobile} />;

export default App;
