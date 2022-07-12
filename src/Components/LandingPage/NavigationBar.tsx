import React, { useState } from 'react';

import NavBarItem from './NavBarItem';

function NavigationBar(props) {
    const [selectedIndex, selectIndex] = useState(0);

    return(
        <div className='bg-slate-500 bg-cover border-slate-600 border-4 h-screen rounded-l-3xl overflow-y-auto'>
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
    );
}

export default NavigationBar;