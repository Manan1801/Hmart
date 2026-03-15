import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  const categories = [
    { name: "Electronics", image: "/images/electronics.png" },
    { name: "Fashion", image: "/images/fashion.jpg" },
    { name: "Home", image: "/images/home.png" },
    { name: "Accessories", image: "/images/accessories.png" },
    { name: "Sports", image: "/images/sports.png" },
    { name: "Books", image: "/images/books.png" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}