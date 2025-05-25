"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import filterIcon from "@/assets/image/filter-icon.png";
import Image from "next/image";
import { filterSections } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

const ProductFilterSidebar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const defaultOpenKey = filterSections[0]?.key;
      const result: Record<string, boolean> = {};

      filterSections.forEach(({ key }) => {
        result[key] = key === defaultOpenKey;
      });

      return result;
    }
  );

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCheckboxChange = (sectionKey: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[sectionKey] || [];
      const isChecked = currentValues.includes(value);

      return {
        ...prev,
        [sectionKey]: isChecked
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };

  return (
    <aside className="w-full max-w-[300px] p-4 border rounded-md bg-white shadow-sm text-sm">
      <div className="flex items-center gap-2 mb-4">
        <Image src={filterIcon} alt="Filter icon" className="w-5 h-5" />
        <h2 className="text-lg font-semibold text-blue-600">Bộ Lọc</h2>
      </div>

      {filterSections.map(({ title, options, key }) => (
        <div key={key} className="border-t pt-[14px] first:border-0 first:pt-0">
          {/* Header + Arrow toggle */}
          <button
            onClick={() => toggleSection(key)}
            className="flex items-center justify-between w-full font-medium mb-4 text-left"
          >
            <span className="font-bold">{title}</span>
            <Icon
              icon={
                openSections[key]
                  ? "iconamoon:arrow-up-2-light"
                  : "iconamoon:arrow-down-2-light"
              }
              className="w-4 h-4"
            />
          </button>

          {/* Option List */}
          <AnimatePresence initial={false}>
            {openSections[key] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden space-y-2 pl-1 pb-3"
              >
                {options.map((option) => (
                  <li key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`${key}-${option}`}
                      checked={selectedFilters[key]?.includes(option) || false}
                      onChange={() => handleCheckboxChange(key, option)}
                      className="accent-blue-600"
                    />
                    <label htmlFor={`${key}-${option}`}>
                      {option} <span className="text-gray-400">(24)</span>
                    </label>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </aside>
  );
};

export default ProductFilterSidebar;
