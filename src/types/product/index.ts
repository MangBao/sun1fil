import { StaticImageData } from "next/image";

export interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  isShowShockPrice?: boolean;
  isShowPuyNow?: boolean;
  isOpenFromMenu?: boolean;
}

export interface ProductGridProps {
  products: ProductCardProps[];
}
