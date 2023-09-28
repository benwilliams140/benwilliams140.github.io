import { useState } from 'react';
import {
  ScrollablePanel,
  ScrollablePanelItem,
  Sidebar,
  SidebarItem,
} from './components';
import { HomePage, ContactPage, ProjectsPage, AboutPage } from './pages';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<string>('home');

  return (
    <div className="panel">
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem}>
        <SidebarItem id="home" label="Home" />
        <SidebarItem id="about" label="About" />
        <SidebarItem id="projects" label="Projects" />
        <SidebarItem id="contact" label="Contact" />
      </Sidebar>
      <ScrollablePanel
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      >
        <ScrollablePanelItem id="home" Content={HomePage} />
        <ScrollablePanelItem id="about" Content={AboutPage} />
        <ScrollablePanelItem id="projects" Content={ProjectsPage} />
        <ScrollablePanelItem id="contact" Content={ContactPage} />
      </ScrollablePanel>
    </div>
  );
}
