import React, { useState } from 'react';

import ExpandingMenuItem from '../Components/LandingPage/ExpandingMenuItem';
import GitHubBar from '../Components/LandingPage/GitHubBar';

function HomeView(props) {
    const [hovered, setHovered] = useState(false);

    return(
        <div className='w-auto h-screen pt-52'>
            <div className='bg-slate-500 bg-cover sm:rounded-r-full w-full pt-3 sm:pt-6 pb-0 sm:min-w-max sm:w-11/12 h-18 sm:h-40'>
                <h1 className='text-slate-300 text-4xl sm:text-6xl lg:text-8xl font-bold tracking-widest'>
                    This is a test!
                </h1>
                <p className='text-slate-300 text-sm sm:text-2xl font-bold tracking-widest pl-24 sm:pl-60 py-0'>
                    Welcome to my virtual sandbox.
                </p>
            </div>
            <GitHubBar/>
        </div>
    );
}

export default HomeView;