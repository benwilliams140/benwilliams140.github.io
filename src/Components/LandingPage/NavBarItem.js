import React, { useState } from 'react';

function NavBarItem(props) {
    return(
        <div className={`flex ${props.selected ? 'bg-slate-400 bg-cover' : ''} border-slate-600 border-b-2 -ml-0.5 pl-5 h-16 justify-center`}
                onClick={(e) => props.select(props.index)}>
            <p className='text-slate-300 text-xl sm:text-2xl font-bold tracking-widest self-center'>
                {props.tag}
            </p>
        </div>
    );
}

export default NavBarItem;