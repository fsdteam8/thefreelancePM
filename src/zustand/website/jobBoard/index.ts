import { create } from "zustand";

interface UsersState {
  status: string;
  setStatus: (status: string) => void;
  type: string;
  setType: (plan: string) => void;
  query: string;
  setQuery: (query: string) => void;
  localtionFilter: string;
  setLocationFilter: (location: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  exp: string;
  setExp: (data: string) => void;
}

const useJobBoardStore = create<UsersState>((set) => ({
  status: "",
  setStatus: (status) => set({ status }),
  type: "",
  setType: (data) => set({ type: data }),
  query: "",
  setQuery: (query) => set({ query }),
  localtionFilter: "",
  setLocationFilter: (location) => set({ localtionFilter: location }),
  sortBy: "asc",
  setSortBy: (sortBy) => set({ sortBy }),
  exp: "",
  setExp: (data) => set({ exp: data }),
}));

export default useJobBoardStore;
