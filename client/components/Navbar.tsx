"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Hmart" width={40} height={40} />
          <span className="font-bold text-lg">Hmart</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/orders">Orders</Link>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-6 hidden md:block">
          <SearchBar />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="/cart">Cart</Link>
          <Link href="/profile">Profile</Link>
        </div>

      </div>
    </nav>
  );
}