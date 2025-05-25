"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { PRICE_OPTIONS, SORT_BUTTONS } from "@/constants";
import { Icon } from "@iconify/react";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { useFilterStore } from "@/stores/filterStore";

const ProductGrid = () => {
  const { filteredProducts, loading } = useFilteredProducts();
  const { sort, priceSort, setSort, setPriceSort } = useFilterStore();

  const handleSortChange = (option: string) => {
    setSort(option);
  };

  const handlePriceSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPriceSort(value || null);
  };

  return (
    <div className="w-full px-4 pl-8 md:px-6 lg:pr-1 max-w-screen-xl mx-auto">
      <div className="md:flex block justify-between items-center">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>

        {/* Sort options */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <h3 className="px-4">Sắp xếp theo</h3>

          {SORT_BUTTONS.map((option) => {
            const isSelected = sort === option;

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
        {loading ? (
          <p>Đang tải sản phẩm...</p>
        ) : filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          filteredProducts
            .slice(0, 16)
            .map((product, idx) => <ProductCard key={idx} {...product} />)
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
