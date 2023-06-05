import { create } from 'zustand';

interface HamburgerSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useHamburgerSidebar = create<HamburgerSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useHamburgerSidebar;