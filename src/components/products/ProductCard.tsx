import React from "react";
import Image from "next/image";
import { ProductCardProps } from "@/types";
import fireIcon from "@/assets/image/fire-icon.png";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  isShowShockPrice = true,
  isShowPuyNow = true,
  isOpenFromMenu = false,
}) => {
  const calculatedDiscount =
    oldPrice && price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-3 w-full max-w-[261px] h-full hover:shadow-md transition-all ${isOpenFromMenu ? "max-h-[354px]" : "max-h-[504px]"}`}
    >
      {/* Image */}
      <div
        className={`relative w-full mb-3 ${isOpenFromMenu ? "h-[200px]" : "h-[261px]"}`}
      >
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div
        className={`table-cell align-bottom ${isOpenFromMenu ? "" : "h-42"}`}
      >
        {/* Tag */}
        {discount && isShowShockPrice && (
          <div
            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full mb-2 font-medium text-orange-800"
            style={{
              background: "linear-gradient(135deg, #ffd159 0%, #ffb009 100%)",
            }}
          >
            <Image src={fireIcon} alt="Fire icon" width={14} height={14} />
            Giá cực sốc
          </div>
        )}

        {/* Title */}
        <p className="text-sm font-medium h-[40px] leading-snug line-clamp-2 text-gray-800">
          {title}
        </p>

        {/* Price */}
        <div className="mt-1">
          <span className="text-red-600 font-bold text-base">
            {price.toLocaleString()} ₫
          </span>
          <div className="flex items-center gap-2 mt-1">
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                {oldPrice.toLocaleString()} ₫
              </span>
            )}
            {discount && (
              <span className="text-xs text-red-500 font-medium">
                -{calculatedDiscount}%
              </span>
            )}
          </div>
        </div>

        {/* Button */}
        {isShowPuyNow && (
          <button className="mt-3 w-full text-center py-1.5 text-sm font-semibold text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition">
            Mua ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
