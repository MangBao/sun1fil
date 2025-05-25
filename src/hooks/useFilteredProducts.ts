import { useEffect, useState } from "react";
import { useFilterStore } from "@/stores/filterStore";
import { ProductCardProps } from "@/types/product";
import { dummyProducts } from "@/constants";

export const useFilteredProducts = () => {
  const { selectedFilters, sort, priceSort } = useFilterStore();
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);

      const query = new URLSearchParams();

      Object.entries(selectedFilters).forEach(([section, values]) => {
        values.forEach((value) => {
          query.append(section, value);
        });
      });

      if (sort) query.append("sort", sort);
      if (priceSort) query.append("price", priceSort);

      const apiUrl = `/api/products?${query.toString()}`;

      try {
        // const res = await fetch(apiUrl);
        // const data = await res.json();
        console.log("API Query", apiUrl);
        console.log("selectedFilters", selectedFilters);
        console.log("priceSort", priceSort);
        console.log("sort", sort);

        setFilteredProducts(dummyProducts || []);
      } catch (err) {
        console.error("Lỗi khi fetch sản phẩm:", err);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [selectedFilters, sort, priceSort]);

  return { filteredProducts, loading };
};
