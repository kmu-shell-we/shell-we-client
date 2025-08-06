import { create } from 'zustand';

// TODO: API 연결
type User = {
  id: number;
  name: string;
  profileUrl: string | null;
};

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
