import { Icon } from "@iconify/react";

export default function StoreHighlights() {
  return (
    <div className="bg-[#F5F8FB] pt-10">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 container mx-auto">
          {/* Item 1 */}
          <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
            <div className="bg-[#E6F1FF] p-2 rounded-full">
              <Icon
                className="text-primary"
                icon="fluent:wallet-credit-card-20-filled"
                width="20"
                height="20"
              />
            </div>
            <div>
              <p className="font-semibold text-[#101828]">
                Miễn phí vận chuyển
              </p>
              <p className="text-sm text-[#667085]">Với hoá đơn từ 1 triệu</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
            <div className="bg-[#E6F1FF] p-2 rounded-full">
              <Icon
                className="text-primary"
                icon="streamline:customer-support-1-solid"
                width="14"
                height="14"
              />
            </div>
            <div>
              <p className="font-semibold text-[#101828]">Hỗ trợ 24/7</p>
              <p className="text-sm text-[#667085]">
                Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
            <div className="bg-[#E6F1FF] p-2 rounded-full">
              <Icon
                className="text-primary"
                icon="mingcute:truck-fill"
                width="24"
                height="24"
              />
            </div>
            <div>
              <p className="font-semibold text-[#101828]">Giao hàng nhanh 2h</p>
              <p className="text-sm text-[#667085]">
                Trong vòng bán kính 10km nội thành TP HCM
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
            <div className="bg-[#E6F1FF] p-2 rounded-full">
              <Icon
                className="text-primary"
                icon="ix:package-filled"
                width="20"
                height="20"
              />
            </div>
            <div>
              <p className="font-semibold text-[#101828]">30 ngày đổi trả</p>
              <p className="text-sm text-[#667085]">
                Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển
              </p>
            </div>
          </div>
        </div>

        {/* Location CTA */}
        <div className="bg-[#E6F1FF] px-6 py-5 ">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon
                icon="fa6-solid:map-location"
                width="24"
                height="24"
                className="text-blue-600"
              />
              <p className="text-xl font-semibold text-[#101828]">
                Xem hệ thống 88 cửa hàng trên toàn quốc
              </p>
            </div>
            <button className="bg-white px-5 py-3 rounded-full text-[#1570EF] font-semibold flex items-center gap-2 shadow-sm">
              Xem ngay{" "}
              <Icon
                icon="iconamoon:arrow-right-2-bold"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
