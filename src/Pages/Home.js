import React, { useState } from 'react';

import ExpandingMenuItem from '../Components/Home/ExpandingMenuItem';
import GitHubBar from '../Components/Home/GitHubBar';

function HomeView(props) {
    const [hovered, setHovered] = useState(false);

    return(
        <div className='w-auto h-screen pt-52'>
            <div className='bg-slate-500 bg-cover sm:rounded-r-full w-full pt-3 sm:pt-6 pb-0 sm:min-w-max sm:w-11/12 h-18 sm:h-40'>
                <h1 className='text-slate-300 text-4xl sm:text-6xl lg:text-8xl font-bold tracking-widest'>
                    Benjamin Williams
                </h1>
                <p className='text-slate-300 text-sm sm:text-2xl font-bold tracking-widest pl-24 sm:pl-60 py-0'>
                    Welcome to my virtual sandbox.
                </p>
            </div>
            <div className='pt-2 sm:pt-4 fixed left-0 w-3/4 sm:w-1/2 block'>
                <ExpandingMenuItem defaultText='About Me' expandedText='I am a fourth year student at Carleton University studying Computer Science with a specialization in game and graphics development.'/>
                <ExpandingMenuItem defaultText='About the Website' expandedText="Honestly, I'm not too sure what I want this to be yet. It will be updated whenever I have time (hopefully fairly consistenly), and will act like an ever-evolving portfolio."/>
            </div>
            <GitHubBar/>
        </div>
    );
}

export default HomeView;