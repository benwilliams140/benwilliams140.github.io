import React, { useState } from 'react';

import HomeView from './HomeView';
import TestView from './TestView';

import NavigationBar from '../Components/LandingPage/NavigationBar';
import MobileNavigationBar from '../Components/LandingPage/MobileNavigationBar';


let navBarItems = [
    { tag: 'Home', component: HomeView },
    { tag: 'Test', component: TestView }
];

function Home(props) {
    const [selectedView, selectView] = useState(0);

    return(
        <div className='bg-slate-400 bg-cover w-auto h-screen sm:grid sm:grid-cols-9'>
            <div className='sm:col-span-7'>
                {
                    navBarItems.map((item, index) => {
                        return index === selectedView && <item.component key={index}/>
                    })
                }
            </div>
            <div className='fixed top-0 right-0 sm:static sm:col-span-2'>
                {
                    props.isMobile() ?
                    <MobileNavigationBar items={navBarItems} changeView={selectView}/> :
                    <NavigationBar items={navBarItems} changeView={selectView}/>
                }
            </div>
        </div>
    );
}

export default Home;
