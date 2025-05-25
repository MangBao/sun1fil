"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import { breadcrumbNameMap } from "@/constants";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (!pathname) return null;

  const pathParts = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    return {
      href,
      label: breadcrumbNameMap[part] || decodeURIComponent(part),
    };
  });

  breadcrumbs.unshift({
    href: "#products",
    label: "Sản phẩm",
  });

  return (
    <nav className="py-3 px-4 text-sm text-gray-600">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="hover:underline text-gray-400">
            Trang chủ
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={crumb.href}>
            <span className="mx-1 text-gray-400">›</span>
            <li>
              <Link
                href={crumb.href}
                className={`hover:underline ${
                  index === breadcrumbs.length - 1
                    ? "text-blue-700 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {crumb.label}
              </Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
