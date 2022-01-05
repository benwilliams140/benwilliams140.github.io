import React, { useState } from 'react';

function MobileNavigationBar(props) {
    const [hovered, setHovered] = useState(false);

    return(
        <div className='flex h-screen'>
            <svg viewBox='0 0 100 80' className='fill-slate-500 w-12 h-12'>
                <rect  width='100' height='20' rx='10' ry='10'/>
                <rect y='30' width='100' height='20' rx='10' ry='10'/>
                <rect y='60' width='100' height='20' rx='10' ry='10'/>
            </svg>
        </div>
    );
}

export default MobileNavigationBar;