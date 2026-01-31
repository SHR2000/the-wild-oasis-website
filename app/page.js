import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-3xl font-normal tracking-tight text-primary-50 min-448:text-4xl min-512:text-5xl min-640:text-6xl min-768:text-7xl min-1024:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 min-448:px-8 min-448:py-6"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
