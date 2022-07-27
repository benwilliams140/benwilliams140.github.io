import React, { useState } from 'react';

import NavBarItem from './NavBarItem';

const NavigationBar = (props: any) => {
  const { items, changeView } = props;

  const [selectedIndex, selectIndex] = useState(0);

  return (
    <div className="bg-slate-500 bg-cover border-slate-600 border-4 h-screen rounded-l-3xl overflow-y-auto">
      {items.map((item: any, index: number) => (
        <NavBarItem
          key={index}
          index={index}
          tag={item.tag}
          selected={selectedIndex === index}
          select={(selIndex: number) => {
            selectIndex(selIndex);
            changeView(selIndex);
          }}
        />
      ))}
    </div>
  );
};

export default NavigationBar;
