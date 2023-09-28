import {
  type FunctionComponent,
  type WheelEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useScrollablePanelContext } from './ScrollablePanel.context';

export type ScrollablePanelItemProps = {
  id: string;
  Content: FunctionComponent;
};

export default function ScrollablePanelItem({
  id,
  Content,
}: ScrollablePanelItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem, scrollToNextItem, scrollToPreviousItem, pageIds } =
    useScrollablePanelContext();

  useEffect(() => {
    if (selectedItem === id) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, selectedItem]);

  const index = useMemo(
    () => pageIds.findIndex(pageId => pageId === id),
    [id, pageIds],
  );

  const handleOnWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      const { deltaY } = event;
      if (deltaY > 0) {
        scrollToNextItem(index);
      } else if (deltaY < 0) {
        scrollToPreviousItem(index);
      }
    },
    [index, scrollToNextItem, scrollToPreviousItem],
  );

  return (
    <div className="w-full h-full" ref={ref} onWheel={handleOnWheel}>
      <Content />
    </div>
  );
}
