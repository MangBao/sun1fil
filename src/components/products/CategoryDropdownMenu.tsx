"use client";
import { useState } from "react";
import Image from "next/image";
import { bestSellingProducts, categories } from "@/constants";
import { Icon } from "@iconify/react";
import ProductCard from "@/components/products/ProductCard";

export default function CategoryDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(categories[0]);

  return (
    <div className="container flex mx-auto justify-between relative mb-4">
      <ul className="flex list-none items-center gap-6">
        <li>
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Icon
                  icon="ion:reorder-three-outline"
                  className="text-lg text-white"
                />
                <span className="text-white text-sm">Danh Mục Sản Phẩm</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className="absolute left-0 top-full bg-white shadow-lg rounded pt-1 w-full xl:min-w-[1376px] lg:min-w-[950px] md:min-w-[750px] flex z-50"
                onMouseEnter={() => setIsOpen(true)}
              >
                {/* Cột danh mục */}
                <div className=" border-r">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setHoveredCategory(cat)}
                      className={`flex justify-between items-center p-4 cursor-pointer hover:bg-blue-100 transition w-[263px] ${
                        hoveredCategory?.id === cat.id ? "bg-blue-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={cat.icon}
                          alt={cat.name}
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>

                      <Icon
                        icon="iconamoon:arrow-right-2"
                        width="24"
                        height="24"
                      />
                    </div>
                  ))}
                </div>

                <div className="">
                  {/* Cột subcategory */}
                  <div className="border-r p-3 grid grid-cols-3 gap-2">
                    {hoveredCategory?.subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="bg-gray-100 hover:bg-gray-200 text-sm font-medium p-2 rounded flex justify-center items-center text-center h-18 cursor-pointer"
                      >
                        {sub.name}
                      </div>
                    ))}
                  </div>

                  {/* Cột sản phẩm bán chạy */}
                  <div className="flex-1 px-4 py-3 overflow-hidden">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-2xl font-semibold">
                        Sản Phẩm Bán Chạy
                      </h4>
                      <a
                        href="#"
                        className="text-base text-primary hover:underline flex items-center"
                      >
                        <span>Xem tất cả</span>
                        <Icon icon="lsicon:double-arrow-right-filled" />
                      </a>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {bestSellingProducts.map((product, idx) => (
                        <ProductCard
                          key={idx}
                          {...product}
                          isShowShockPrice={false}
                          isShowPuyNow={false}
                          isOpenFromMenu
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <a
            href="http://"
            className="hover:text-primary transition-colors duration-200"
          >
            <span>Về chúng tôi</span>
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="hover:text-primary transition-colors duration-200"
          >
            <span>Bài viết</span>
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="hover:text-primary transition-colors duration-200"
          >
            <span>Catalog</span>
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="hover:text-primary transition-colors duration-200"
          >
            <span>Liên hệ</span>
          </a>
        </li>
      </ul>
      <ul className="flex list-none items-center gap-6">
        <li>
          <a
            href=""
            className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
          >
            <Icon icon="mdi:clock" className="text-[20px] text-primary" />
            <span>Hỗ trợ 24/7</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
          >
            <Icon
              icon="solar:hand-money-bold"
              className="text-[20px] text-primary"
            />
            <span>Miễn phí vận chuyển</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
          >
            <Icon
              icon="mingcute:truck-fill"
              className="text-[20px] text-primary"
            />
            <span>Giao hàng nhanh 2h</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
          >
            <Icon
              icon="solar:refresh-circle-bold"
              className="text-[20px] text-primary"
            />
            <span>30 ngày đổi trả</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
