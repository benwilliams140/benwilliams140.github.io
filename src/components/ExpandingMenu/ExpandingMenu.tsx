import * as React from 'react';
import styled from 'styled-components';
import type { BaseComponentProps } from '../../constants/types';
import Divider from '../Divider/Divider';
import ExpandingMenuItem from './ExpandingMenuItem';
import type { MenuItem } from './types';

export type ExpandingMenuProps = BaseComponentProps & {
  /**
   * The items to render in the menu.
   */
  items: MenuItem[];
  /**
   * Width of the menu items
   */
  width?: number;
};

const ExpandingMenu = (props: ExpandingMenuProps) => {
  const { items, width = 300 } = props;

  return (
    <StyledContainer width={width}>
      {items.map((item: MenuItem) => {
        const { label, text } = item;
        return <ExpandingMenuItem label={label} text={text} />;
      })}
      <Divider direction="horizontal" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default ExpandingMenu;
