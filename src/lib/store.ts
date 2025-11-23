import { create } from 'zustand';

type UIState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  showMatrix: boolean;
  setMatrix: (v: boolean) => void;
  wisdomIndex: number;
  nextWisdom: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((s: UIState) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
  showMatrix: false,
  setMatrix: (v: boolean) => set({ showMatrix: v }),
  wisdomIndex: 0,
  nextWisdom: () => set((s: UIState) => ({ wisdomIndex: s.wisdomIndex + 1 })),
}));
