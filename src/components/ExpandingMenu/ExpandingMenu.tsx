import * as React from 'react';
import type { BaseProps } from '../../constants/types';
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

function ExpandingMenu(props: ExpandingMenuProps) {
  const { items, width } = props;
  return <div />;
}

ExpandingMenu.defaultProps = {
  width: 300,
};

export default ExpandingMenu;
