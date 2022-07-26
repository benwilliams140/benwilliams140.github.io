import * as React from 'react';

import Home from './Home';
import ParticlesTest from './ParticlesTest';

import NavigationBar from '../components/LandingPage/NavigationBar';
import MobileNavigationBar from '../components/LandingPage/MobileNavigationBar';

const { useState } = React;

const navBarItems = [
  { tag: 'Home', component: Home },
  { tag: 'Particles Test', component: ParticlesTest },
];

const LandingPage = (props: any) => {
  const { isMobile } = props;
  const [selectedView, selectView] = useState(0);

  return (
    <div className="bg-slate-400 bg-cover w-auto h-screen sm:grid sm:grid-cols-9">
      <div className="sm:col-span-7">
        {navBarItems.map(
          (item, index) =>
            index === selectedView && <item.component key={index} />,
        )}
      </div>
      <div className="fixed top-0 right-0 sm:static sm:col-span-2">
        {isMobile() ? (
          <MobileNavigationBar items={navBarItems} changeView={selectView} />
        ) : (
          <NavigationBar items={navBarItems} changeView={selectView} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
