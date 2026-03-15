"use client";

import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search");
  const category = searchParams.get("category");

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">Products</h1>

      {searchQuery && (
        <p className="text-gray-600">
          Showing results for: <span className="font-medium">{searchQuery}</span>
        </p>
      )}

      {category && (
        <p className="text-gray-600">
          Category: <span className="font-medium capitalize">{category}</span>
        </p>
      )}

      <ProductGrid />

    </div>
  );
}