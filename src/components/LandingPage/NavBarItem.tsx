import * as React from 'react';

const NavBarItem = (props: any) => {
  const { select, index, tag } = props;

  return (
    <div
      // className={`flex ${
      //   props.selected ? 'bg-slate-400 bg-cover' : ''
      // } border-slate-600 border-b-2 h-16 justify-center`}
      onClick={e => select(index)}>
      <p className="text-slate-300 text-xl sm:text-2xl font-bold tracking-widest self-center">
        {tag}
      </p>
    </div>
  );
};

export default NavBarItem;
