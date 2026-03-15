import Image from "next/image";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Placeholder product data
  const product = {
    id,
    name: "Sample Product",
    price: 2999,
    description:
      "This is a placeholder product description. Later this data will come from your backend API.",
    image: "/images/product1.jpg",
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">

      {/* Product Image */}
      <div className="relative w-full h-96 border rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-2xl font-semibold">
          ₹{product.price}
        </p>

        <p className="text-gray-600">
          {product.description}
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
          Add to Cart
        </button>

      </div>
    </div>
  );
}