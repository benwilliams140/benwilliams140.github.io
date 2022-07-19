import * as React from 'react';

const { useState, useCallback } = React;

function ExpandingMenuItem() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMove = useCallback((hovered: boolean) => () => {
    setIsHovered(hovered);
  }, []);

  return <div />;
}

export default ExpandingMenuItem;
