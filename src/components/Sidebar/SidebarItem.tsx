import { useCallback } from 'react';
import { useSidebarContext } from './Sidebar.context';

export type SidebarItemProps = {
  id: string;
  label: string;
};

export default function SidebarItem({ id, label }: SidebarItemProps) {
  const { selectedItem, setSelectedItem, setIsOpen } = useSidebarContext();

  const handleOnClick = useCallback(() => {
    setSelectedItem(id);
    setIsOpen(false);
  }, [id, setIsOpen, setSelectedItem]);

  return (
    <div
      className={`sidebar-item ${selectedItem === id ? 'bg-secondary-30' : ''}`}
      onClick={handleOnClick}
    >
      <div className="sidebar-item-label">{label}</div>
    </div>
  );
}
