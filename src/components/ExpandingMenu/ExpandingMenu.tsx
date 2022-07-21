import * as React from 'react';
import styled from 'styled-components';
import type { BaseProps } from '../../constants/types';
import ExpandingMenuItem from './ExpandingMenuItem';
import type { MenuItem } from './types';

export type ExpandingMenuProps = BaseProps & {
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
      {items.map(item => {
        const { label, text } = item;
        return <ExpandingMenuItem label={label} text={text} />;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ width: number }>`
  width: ${(props) => props.width};
  height: auto;
  display: flex;
  flex-direction: column;
  background: red;
`;

export default ExpandingMenu;
