import React, { useState } from 'react';

import HomeView from '../Components/LandingPage/HomeView';
import NavigationBar from '../Components/LandingPage/NavigationBar';

function Home(props) {
    return(
        <div className='grid grid-cols-9'>
            <div className='col-span-7'>
                <HomeView/>
            </div>
            <div className='col-span-2'>
                <NavigationBar/>
            </div>
        </div>
    );
}

export default Home;
