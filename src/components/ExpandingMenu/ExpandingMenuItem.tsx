import * as React from 'react';
import type { BaseProps } from '../../constants/types';
import type { ExpandingMenuProps } from './ExpandingMenu';
import type { MenuItem } from './types';

const { useState, useCallback } = React;

export type ExpandingMenuItemProps = BaseProps & Pick<ExpandingMenuProps, 'width'> & MenuItem;

function ExpandingMenuItem(props: ExpandingMenuItemProps) {
  const { width, label, text } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback((hovered: boolean) => () => {
    setIsHovered(hovered);
  }, []);

  return <p onMouseEnter={handleMouseMove(true)} onMouseLeave={handleMouseMove(false)}>{isHovered ? text : label }</p>;
}

export default ExpandingMenuItem;
