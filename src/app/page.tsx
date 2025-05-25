import React from "react";
import HeroBanner from "@/components/products/HeroBanner";
import ProductFilterSidebar from "@/components/products/ProductFilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import UserHeader from "@/components/common/UserHeader";
import CategoryDropdownMenu from "@/components/products/CategoryDropdownMenu";
import Breadcrumb from "@/components/common/Breadcrumb";
import StoreHighlights from "@/components/common/StoreHighlights";
import Footer from "@/components/common/Footer";
import { dummyProducts } from "@/constants";
import subtractIcon from "@/assets/image/subtract-icon.png";
import phoneIcon from "@/assets/image/phone-icon.png";
import mobileIcon from "@/assets/image/mobile-icon.png";
import TopBanner from "@/components/common/TopBanner";

export default function ProductPage() {
  return (
    <div className="w-full relative">
      {/* Top banner */}
      <TopBanner
        subtractIcon={subtractIcon}
        phoneIcon={phoneIcon}
        mobileIcon={mobileIcon}
      />
      {/* User header */}
      <UserHeader />
      {/* Category, menu */}
      <CategoryDropdownMenu />
      <div className="bg-second-background text-sm text-gray-700 container mx-auto">
        <Breadcrumb />
        <HeroBanner />
        <div className="container mx-auto px-0 py-6 flex justify-between">
          <ProductFilterSidebar />
          <ProductGrid products={dummyProducts} />
        </div>
      </div>
      <StoreHighlights />
      <Footer />
    </div>
  );
}
