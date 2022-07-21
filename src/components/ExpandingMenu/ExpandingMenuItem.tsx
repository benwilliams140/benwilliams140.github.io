import * as React from 'react';
import styled from 'styled-components';
import type { BaseProps } from '../../constants/types';
import type { ExpandingMenuProps } from './ExpandingMenu';
import type { MenuItem } from './types';

const { useState, useCallback } = React;

export type ExpandingMenuItemProps = BaseProps &
  Pick<ExpandingMenuProps, 'width'> &
  MenuItem;

const ExpandingMenuItem = (props: ExpandingMenuItemProps) => {
  const { label, text } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback(
    (hovered: boolean) => () => {
      setIsHovered(hovered);
    },
    [],
  );

  return (
    <StyledP
      onMouseEnter={handleMouseMove(true)}
      onMouseLeave={handleMouseMove(false)}
    >
      {isHovered ? text : label}
    </StyledP>
  );
};

const StyledP = styled.p``;

export default ExpandingMenuItem;
