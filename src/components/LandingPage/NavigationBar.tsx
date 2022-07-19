import React, { useState } from 'react';

import NavBarItem from './NavBarItem';

function NavigationBar(props: any) {
    const [selectedIndex, selectIndex] = useState(0);

    return(
        <div className='bg-slate-500 bg-cover border-slate-600 border-4 h-screen rounded-l-3xl overflow-y-auto'>
            {
                props.items.map((item: any, index: number) => {
                    return(<NavBarItem key={index}
                                        index={index}
                                        tag={item.tag}
                                        selected={selectedIndex === index}
                                        select={(index: number) => {
                                            selectIndex(index);
                                            props.changeView(index);
                                        }}/>);
                })
            }
        </div>
    );
}

export default NavigationBar;