import {
  useCallback,
  type Dispatch,
  type SetStateAction,
  useEffect,
  Children,
  useMemo,
  ReactElement,
} from 'react';
import { ScrollablePanelContext } from './ScrollablePanel.context';
import type { ScrollablePanelItemProps } from './ScrollablePanelItem';
import { getNextIndex } from './utils';

export { default as ScrollablePanelItem } from './ScrollablePanelItem';

export type ScrollablePanelProps = {
  selectedItem: ScrollablePanelItemProps['id'];
  setSelectedItem: Dispatch<SetStateAction<string>>;
  children:
    | ReactElement<ScrollablePanelItemProps>
    | ReactElement<ScrollablePanelItemProps>[];
};

export default function ScrollablePanel({
  selectedItem,
  setSelectedItem,
  children,
}: ScrollablePanelProps) {
  const pageIds = useMemo(
    () =>
      Children.map(
        children,
        (child: ReactElement<ScrollablePanelItemProps>) => child.props.id,
      ),
    [children],
  );

  const scrollToNextItem = useCallback(
    (curIndex: number) => {
      const nextIndex = getNextIndex(curIndex, 1, pageIds.length);
      setSelectedItem(pageIds[nextIndex]);
    },
    [pageIds, setSelectedItem],
  );

  const scrollToPreviousItem = useCallback(
    (curIndex: number) => {
      const nextIndex = getNextIndex(curIndex, -1, pageIds.length);
      setSelectedItem(pageIds[nextIndex]);
    },
    [pageIds, setSelectedItem],
  );

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const curIndex = pageIds.findIndex(id => id === selectedItem);
      if (event.key === 'ArrowDown') {
        scrollToNextItem(curIndex);
      } else if (event.key === 'ArrowUp') {
        scrollToPreviousItem(curIndex);
      }
    },
    [pageIds, scrollToNextItem, scrollToPreviousItem, selectedItem],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, [handleOnKeyDown]);

  return (
    <ScrollablePanelContext.Provider
      value={{ selectedItem, scrollToNextItem, scrollToPreviousItem, pageIds }}
    >
      <div className="w-full h-full overflow-hidden overscroll-contain">
        {children}
      </div>
    </ScrollablePanelContext.Provider>
  );
}
