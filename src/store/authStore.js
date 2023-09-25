import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: {},
      token: null,
      setUser: (newUser) => set({ user: newUser || {} }),
      setToken: (newToken) => set({ token: newToken || null }),
    }),
    {
      name: "auth-storage", //
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
