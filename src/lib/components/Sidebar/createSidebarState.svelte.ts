export default function createSidebarState() {
  let selectedItem = $state<string>('home');
  return {
    get selectedItem() {
      return selectedItem;
    },
    set selectedItem(value) {
      selectedItem = value;
    },
  };
}
