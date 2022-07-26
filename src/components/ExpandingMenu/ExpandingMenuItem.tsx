import * as React from 'react';
import styled from 'styled-components';
import type { BaseComponentProps } from '../../constants/types';
import type { MenuItem } from './types';
import colors from '../../constants/colors';

const { useState, useCallback } = React;

export type ExpandingMenuItemProps = BaseComponentProps & MenuItem;

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
    <StyledSpan
      onMouseEnter={handleMouseMove(true)}
      onMouseLeave={handleMouseMove(false)}
      theme={colors}>
      {isHovered ? text : label}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  width: 100%;
  padding: 4px 0;
  margin-bottom: 8px;
  border-radius: 0 999px 999px 0;
  background-color: ${props => props.theme.foreground};
`;

export default ExpandingMenuItem;
