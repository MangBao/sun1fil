import { StaticImageData } from "next/image";

export interface TopBannerProps {
  subtractIcon: string | StaticImageData;
  phoneIcon: string | StaticImageData;
  mobileIcon: string | StaticImageData;
}

export interface FilterState {
  selectedFilters: Record<string, string[]>;
  sort: string | null;
  priceSort: string | null;

  setFilter: (key: string, value: string) => void;
  removeFilter: (key: string, value: string) => void;

  setSort: (sort: string) => void;
  setPriceSort: (priceSort: string | null) => void;

  resetFilters: () => void;
}
