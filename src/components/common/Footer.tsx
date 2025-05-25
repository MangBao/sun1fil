"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import boCongThuongImage from "@/assets/image/bo-cong-thuong.png";
import bgFooter from "@/assets/image/bg-footer.jpg";
import { useLanguage } from "@/components/common/LanguageContext";

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <footer className="relative text-[#5F6D7E] text-sm h-[363px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgFooter.src})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Cột 1: Thông tin công ty */}
        <div className="space-y-2">
          <h2 className="font-bold text-[#001B4E] uppercase">
            VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
          </h2>
          <p>
            Tax code: <span className="font-semibold">0305094228</span>
          </p>
          <p>
            Address:{" "}
            <span className="font-semibold">
              13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
            </span>
          </p>
          <p>
            Phone number:{" "}
            <a
              href="tel:02837607607"
              className="text-[#2C4ECF] underline font-medium"
            >
              0283 760 7607
            </a>
          </p>
          <p>
            Opening hour:{" "}
            <span className="font-semibold">09:00 – 22:00 from Mon – Fri</span>
          </p>

          {/* Icon bộ công thương */}
          <div className="mt-4">
            <Image
              src={boCongThuongImage}
              alt="Bộ Công Thương"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Cột 2: Sitemap */}
        <div className="space-y-2">
          <h3 className="font-bold text-[#001B4E] text-lg">Sitemap</h3>
          <p>About</p>
          <p>Article</p>
          <p>Cart</p>
          <p>Contact</p>
        </div>

        {/* Cột 3: Legal */}
        <div className="space-y-2">
          <h3 className="font-bold text-[#001B4E] text-lg">Legal</h3>
          <p className="font-semibold">Privacy Policy</p>
          <p>Cookie policy</p>
          <p>Delivery policy</p>
          <p>FAQs</p>
        </div>

        {/* Cột 4: App Download */}
        <div className="space-y-4">
          <h3 className="font-bold text-[#001B4E] text-lg">Download App</h3>
          <div className="space-y-3">
            <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-md w-full">
              <Icon icon="simple-icons:googleplay" className="text-2xl" />
              <div className="text-left text-sm">
                <div className="text-xs">Get It On</div>
                <div className="font-medium">Google Play Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-[#007AFF] text-white px-4 py-2 rounded-md w-full">
              <Icon icon="ic:baseline-apple" className="text-2xl" />
              <div className="text-left text-sm">
                <div className="text-xs">Download from</div>
                <div className="font-medium">Apple App Store</div>
              </div>
            </button>
          </div>

          {/* Language switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:opacity-80 transition min-w-16"
          >
            {language === "vi" ? (
              <Icon icon="emojione:flag-for-vietnam" width="32" height="32" />
            ) : (
              <Icon icon="circle-flags:lang-en-us" width="32" height="32" />
            )}
            <span className="font-medium uppercase">{language}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
