import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: "1",
    name: "Oil",
    price: 2999,
    image: "/images/product1.jpg",
  },
  {
    id: "2",
    name: "Tiffin Box",
    price: 4999,
    image: "/images/product2.jpg",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 1999,
    image: "/images/product3.jpg",
  },
  {
    id: "4",
    name: "Cooking Pan",
    price: 1499,
    image: "/images/product4.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}