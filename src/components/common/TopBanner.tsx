import { TopBannerProps } from "@/types";
import Image from "next/image";

const TopBanner = ({ subtractIcon, phoneIcon, mobileIcon }: TopBannerProps) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-start via-blue-mid to-blue-end absolute top-0">
      <div className="container mx-auto flex justify-between w-full h-5 text-white">
        <div className="flex items-center gap-1">
          <Image src={subtractIcon} alt="Discount Icon" className="w-3 h-3" />
          <span className="text-xs">
            Nhập mã <b className="text-primary-yellow">NEWBIE</b> giảm ngay 10%
            cho lần đầu mua hàng.
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Image src={phoneIcon} alt="Phone Icon" className="w-3 h-3" />
          <span className="text-xs mr-1 px-1">
            Hotline: <b className="text-primary-yellow">0283 760 7607</b>
          </span>
          <Image src={mobileIcon} alt="Mobile Icon" className="w-3 h-4 ml-1" />
          <span className="text-xs px-1">Tải ứng dụng</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
