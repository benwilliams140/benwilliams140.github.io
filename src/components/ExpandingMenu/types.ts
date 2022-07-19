import type { BaseProps } from '../../constants/types';

export type MenuItem = {

};

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

export type ExpandingMenuItemProps = BaseProps & Pick<ExpandingMenuProps, 'width'> & {

}
