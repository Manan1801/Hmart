import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">

        <Image
          src="/logo.svg"
          alt="Hmart Logo"
          width={180}
          height={80}
          priority
        />

        <h1 className="mt-10 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Hmart
        </h1>

        <p className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-300">
          Different Needs. One Solution.
        </p>

        <p className="mt-8 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          A new generation ecommerce platform designed to bring everything you
          need into one seamless experience. Smarter discovery, faster delivery,
          and a marketplace built for modern shoppers.
        </p>

        <div className="mt-12 flex gap-4">
          <button className="rounded-full bg-black px-8 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Coming Soon
          </button>
        </div>

      </main>
    </div>
  );
}