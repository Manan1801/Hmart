import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Hmart
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Different Needs. One Solution.
        </p>

        <Link
          href="/products"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          Explore Products
        </Link>
      </section>


      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard name="Electronics" />
          <CategoryCard name="Fashion" />
          <CategoryCard name="Home" />
          <CategoryCard name="Accessories" />
        </div>
      </section>


      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Featured Products
        </h2>

        <ProductGrid />
      </section>

    </div>
  );
}