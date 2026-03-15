import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  name: string;
  image?: string;
};

export default function CategoryCard({ name, image }: CategoryCardProps) {
  const categorySlug = name.toLowerCase();

  return (
    <Link
      href={`/products?category=${categorySlug}`}
      className="border rounded-lg overflow-hidden hover:shadow-md transition bg-white"
    >
      <div className="relative w-full h-32 bg-gray-100 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-lg font-medium text-gray-700">
            {name}
          </span>
        )}
      </div>

      <div className="p-3 text-center font-medium">
        {name}
      </div>
    </Link>
  );
}