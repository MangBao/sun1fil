import { FilterState } from "@/types";
import { create } from "zustand";

export const useFilterStore = create<FilterState>((set) => ({
  selectedFilters: {},
  sort: null,
  priceSort: null,

  setFilter: (key, value) =>
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        [key]: [...new Set([...(state.selectedFilters[key] || []), value])],
      },
    })),

  removeFilter: (key, value) =>
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        [key]: (state.selectedFilters[key] || []).filter((v) => v !== value),
      },
    })),

  setSort: (sort) => set(() => ({ sort })),
  setPriceSort: (priceSort) => set(() => ({ priceSort })),

  resetFilters: () =>
    set(() => ({
      selectedFilters: {},
      sort: null,
      priceSort: null,
    })),
}));
