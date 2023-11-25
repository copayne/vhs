/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { create } from 'zustand';

interface DarkMode {
  darkMode: boolean
  update: (newValue : boolean) => void
}

export const useDarkMode = create<DarkMode>()(( set ) => ({
  darkMode: false,
  update: (newValue : boolean) => set({ darkMode: newValue }),
}));
