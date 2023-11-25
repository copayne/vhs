import { create } from 'zustand';

interface DarkMode {
  darkMode: boolean
  update: (newValue : boolean) => void
}

export const useDarkMode = create<DarkMode>()(( set ) => ({
  darkMode: false,
  update: (newValue : boolean) => set({ darkMode: newValue }),
}));
