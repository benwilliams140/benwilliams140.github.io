import React, { useState } from 'react';

function ExpandingMenuItem(props) {
    const [hovered, setHovered] = useState(false);

    return(
        <div className={`bg-slate-500 bg-cover bg-clip-content rounded-r-full max-w-full sm:max-w-[50%] pt-2 transition origin-top-left hover:scale-125 hover:rounded-r-[25px] duration-300`}
                onMouseEnter={(e) => setHovered(true)}
                onMouseLeave={(e) => setHovered(false)}>
            <p className={`text-slate-300 ${hovered ? 'text-md sm:text-lg tracking-normal' : 'text-2xl tracking-wider font-bold'} wrap-text`}>
                {hovered ? props.expandedText : props.defaultText}
            </p>
        </div>
    );
}

export default ExpandingMenuItem;