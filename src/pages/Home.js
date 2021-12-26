import React, { useState } from 'react';
import { Canvas, useCanvas } from 'react-three-fiber';
import Box from '../components/Box';

function Home(props) {
    return(
        <div className='bg-slate-400 bg-cover h-screen'>
            <div className='bg-slate-500 bg-cover sm:rounded-r-full box-content fixed left-0 top-1/4 w-full sm:w-7/12 h-20 sm:h-40'>
                <h1 className='text-slate-300 text-4xl sm:text-8xl font-bold tracking-widest leading-loose sm:leading-normal'>
                    Benjamin Williams
                </h1>
                <p className='text-slate-300 text-sm sm:text-2xl font-bold tracking-widest absolute left-1/4 bottom-1'>Welcome to my personal sandbox.</p>
            </div>
            <div className='w-full fixed bottom-8 sm:bottom-5'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10,10,10]} />
                    <Box position={[0,0,0]}/>
                </Canvas>
            </div>
            <div className='bg-slate-500 bg-cover rounded-t-lg fixed left-0 sm:left-1/4 bottom-0 w-full sm:w-1/2'>
                <p className='text-slate-300 text-xl sm:text-2xl w-full text-center tracking-wider'>
                    This is currently a WIP. Please see my <a className='underline' href='https://github.com/benwilliams140'>GitHub</a> profile.
                </p>
            </div>
        </div>
    );
}

export default Home;
