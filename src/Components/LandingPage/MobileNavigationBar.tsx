import React, { useState } from 'react';

import NavBarItem from './NavBarItem';

function MobileNavigationBar(props) {
    const [active, setActive] = useState(false);
    const [selectedIndex, selectIndex] = useState(0);

    return(
        <div className='flex'>
            <div className={`pt-2 px-2 ${active ? 'fixed left-0' : ''}`}
                    onClick={(e) => setActive(!active)}>
                <svg viewBox='0 0 100 80' className='fill-slate-500 w-12 h-12'>
                    <rect  width='100' height='20' rx='10' ry='10'/>
                    <rect y='30' width='100' height='20' rx='10' ry='10'/>
                    <rect y='60' width='100' height='20' rx='10' ry='10'/>
                </svg>
            </div>
            <div className={`w-screen ${active ? '' : 'hidden'}`}>
                <div className='bg-slate-500 bg-cover border-slate-600 border-4 pl-0 fixed top-0 right-0 h-screen w-5/6 rounded-l-3xl overflow-y-auto'>
                    {
                        props.items.map((item, index) => {
                            return(<NavBarItem key={index}
                                index={index}
                                tag={item.tag}
                                selected={selectedIndex === index}
                                select={(index) => {
                                    selectIndex(index);
                                    props.changeView(index);
                                }}/>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MobileNavigationBar;