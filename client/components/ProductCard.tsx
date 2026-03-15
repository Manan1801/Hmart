import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="border rounded-lg overflow-hidden hover:shadow-md transition bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-medium text-sm line-clamp-2">
          {name}
        </h3>

        <p className="text-lg font-semibold text-black">
          ₹{price}
        </p>
      </div>
    </Link>
  );
}