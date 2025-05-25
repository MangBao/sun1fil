"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import logoImage from "@/assets/image/logo_sunfil1.png";
import cartIcon from "@/assets/image/cart-icon.png";
import { useLanguage } from "@/components/common/LanguageContext";
import ProductCard from "@/components/products/ProductCard";
import { cartProducts } from "@/constants";

export default function UserHeader() {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [cartCount, setCartCount] = useState<number>(12);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="container mx-auto w-full px-4 pb-4 pt-11 flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src={logoImage}
          alt="Logo Sunfil"
          className="w-40 h-20 md:w-52 md:h-24 lg:w-64 lg:h-28 object-contain"
        />{" "}
      </div>

      {/* Search bar */}
      <div className="flex-grow w-full lg:w-auto flex items-center border border-primary rounded-full h-14 md:h-16 p-4 lg:p-5 mx-0 lg:mx-6 bg-white max-w-full lg:max-w-[739px] min-w-0">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          className="w-full min-w-0 flex-grow outline-none text-sm placeholder-gray-400 bg-transparent"
        />
        <button className="mx-2 text-gray-600 hover:text-gray-800">
          <Icon icon="heroicons:camera" width="24" height="24" />
        </button>
        <button className="bg-blue-500 hover:bg-primary text-white px-4 py-2 rounded-full">
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
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1117 9a7.5 7.5 0 01-.35 7.65z"
            />
          </svg>
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 md:gap-6 text-sm text-gray-800 relative">
        {/* Language switcher */}
        <button
          onClick={toggleLanguage}
          className="hidden lg:flex items-center gap-1 hover:opacity-80 transition min-w-16"
        >
          {language === "vi" ? (
            <Icon icon="emojione:flag-for-vietnam" width="28" height="28" />
          ) : (
            <Icon icon="circle-flags:lang-en-us" width="28" height="28" />
          )}
          <span className="font-medium uppercase hidden sm:inline">
            {language}
          </span>
        </button>

        {/* Cart */}
        <div
          className="relative"
          onMouseEnter={() => setShowCartPreview(true)}
          onMouseLeave={() => setShowCartPreview(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition">
            <Image src={cartIcon} alt="Cart Icon" className="w-6 h-6" />
            <span className="font-medium hidden sm:inline">Giỏ hàng</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 left-3 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </div>

          {/* Cart Preview Dropdown */}
          {showCartPreview && (
            <div className="absolute right-0 top-6 w-72 bg-white rounded-2xl shadow-xl z-50 p-4 animate-fade-in">
              {/* Cart Item */}
              {cartProducts.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          )}
        </div>

        {/* Account */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition">
            <Icon
              icon="mingcute:user-4-fill"
              className="text-[26px] text-primary"
            />
            <span className="font-medium hidden sm:inline">Tài khoản</span>
          </div>

          {showDropdown && (
            <div className="absolute right-0 top-10 w-52 bg-white border rounded shadow-md z-50 py-2 animate-fade-in">
              {!isLoggedIn ? (
                <>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Đăng nhập
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Đăng ký
                  </button>
                </>
              ) : (
                <>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Thông tin tài khoản
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Đổi mật khẩu
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Đăng xuất
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
