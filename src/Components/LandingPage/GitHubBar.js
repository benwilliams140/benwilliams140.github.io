import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Box from '../WebGL/Box';

function GitHubBar(props) {
    return(
        <div className='flex justify-center'>
            <div className='fixed bottom-0'>
                <div className='flex flex-col items-stretch'>
                    <div className='mx-auto self-start'>
                        <Canvas>
                            <ambientLight />
                            <pointLight position={[10,10,10]} />
                            <Box position={[0,0,0]}/>
                        </Canvas>
                    </div>
                    <div className='bg-slate-500 bg-cover rounded-t-lg flex'>
                        <p className='text-slate-300 text-xl sm:text-2xl text-center tracking-wider'>
                            This is currently a WIP. Please see my <a className='underline' href='https://github.com/benwilliams140'>GitHub</a> profile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitHubBar;