import React, { useState } from 'react';

import HomeView from '../Components/LandingPage/HomeView';
import NavigationBar from '../Components/LandingPage/NavigationBar';
import MobileNavigationBar from '../Components/LandingPage/MobileNavigationBar';

function Home(props) {
    return(
        <div className='sm:grid sm:grid-cols-9'>
            <div className='sm:col-span-7'>
                <HomeView/>
            </div>
            <div className='fixed top-2 right-2 sm:static sm:col-span-2'>
                {
                    props.isMobile() ?
                    <MobileNavigationBar/> :
                    <NavigationBar/>
                }
            </div>
        </div>
    );
}

export default Home;
