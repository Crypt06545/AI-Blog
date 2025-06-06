"use client";

import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  isLoaded: false,
  setUser: (user) => set({ user, isLoaded: true }),
  clearUser: () => set({ user: null, isLoaded: true }),
}));
