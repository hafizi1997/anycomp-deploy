import { create } from "zustand";

interface DropdownStore {
  activeDropdown: string | null;
  toggleDropdown: (key: string) => void;
}

export const useDropdownStore = create<DropdownStore>((set) => ({
  activeDropdown: null,
  toggleDropdown: (key) =>
    set((state) => ({
      activeDropdown: state.activeDropdown === key ? null : key,
    })),
}));
