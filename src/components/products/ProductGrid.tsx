"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductGridProps } from "@/types/product";
import { PRICE_OPTIONS, SORT_BUTTONS } from "@/constants";
import { Icon } from "@iconify/react";

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedSort, setSelectedSort] = useState<string | null>("Liên quan");
  const [priceSort, setPriceSort] = useState<string | null>(null);

  const handleSortChange = (option: string) => {
    setSelectedSort(option);
  };

  const handlePriceSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceSort(e.target.value || null);
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="md:flex block justify-between items-center">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>

        {/* Sort options */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <h3 className="px-4">Sắp xếp theo</h3>

          {SORT_BUTTONS.map((option) => {
            const isSelected = selectedSort === option;

            return (
              <button
                key={option}
                onClick={() => handleSortChange(option)}
                className={`relative px-4 py-2 text-sm rounded-lg border transition duration-200 flex items-center justify-center
                        ${
                          isSelected
                            ? "border-primary text-primary bg-white"
                            : "border-gray-300 text-gray-700 bg-white hover:bg-blue-50"
                        }
                    `}
              >
                {option}

                {isSelected && (
                  <div className="absolute top-0 right-0 w-5 h-5 bg-primary rounded-tr-[8px] rounded-bl-[30px] flex items-center justify-center">
                    <Icon
                      icon="basil:check-solid"
                      className="text-white text-[16px]"
                    />
                  </div>
                )}
              </button>
            );
          })}

          {/* Select box for Price Sort */}
          <select
            value={priceSort || ""}
            onChange={handlePriceSortChange}
            className="px-4 py-2 text-sm border-none outline-none rounded-md bg-second-background text-gray-700 border-gray-300 hover:bg-blue-100 focus:outline-none "
          >
            {PRICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 16).map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
