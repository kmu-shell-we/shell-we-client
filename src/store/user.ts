import { create } from 'zustand';

import { UserResponse } from '@/api/dto/user';

// TODO: API 연결

interface UserStore {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
