import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from '../components/threejs/Box';
import ExpandingMenuItem from '../components/landing_page/expanding_menu_item';

function Home(props) {
    return(
        <div className='bg-slate-400 bg-cover h-screen pt-52'>
            <div className='bg-slate-500 bg-cover sm:rounded-r-full w-full pt-3 sm:pt-6 pb-0 sm:min-w-max sm:w-7/12 h-18 sm:h-40'>
                <h1 className='text-slate-300 text-4xl sm:text-8xl font-bold tracking-widest'>
                    Benjamin Williams
                </h1>
                <p className='text-slate-300 text-sm sm:text-2xl font-bold tracking-widest pl-24 sm:pl-60 py-0'>
                    Welcome to my virtual sandbox.
                </p>
            </div>
            <div className='pt-2 sm:pt-4 fixed left-0 w-3/4 sm:w-1/2 block'>
                <ExpandingMenuItem defaultText='Who am I?' expandedText='I am a fourth year student at Carleton University studying Computer Science with a specialization in game and graphics development.'/>
                <ExpandingMenuItem defaultText='What is this?' expandedText="Honestly, I'm not too sure what I want this to be yet. This will be updated whenever I have time (hopefully fairly consistenly), and will act like an ever-evolving portfolio."/>
            </div>
            <div className='content-center'>
                <div className='w-full fixed bottom-8 sm:bottom-5'>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10,10,10]} />
                        <Box position={[0,0,0]}/>
                    </Canvas>
                </div>
                <div className='bg-slate-500 bg-cover rounded-t-lg fixed left-0 sm:left-1/4 bottom-0 w-full sm:min-w-max sm:w-1/2'>
                    <p className='text-slate-300 text-xl sm:text-2xl w-full text-center tracking-wider'>
                        This is currently a WIP. Please see my <a className='underline' href='https://github.com/benwilliams140'>GitHub</a> profile.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
