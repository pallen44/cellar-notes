import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <main className="paper-texture min-h-screen">
      <SiteHeader />
      <section className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cork">
          Missing bottle
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-cellar">
          This note is not in the cellar.
        </h1>
        <p className="mt-4 leading-7 text-ink/65">
          Head back to the journal to find a bottle that is already on the shelf.
        </p>
        <Link
          href="/wines"
          className="mt-8 inline-flex rounded-full bg-cellar px-6 py-3 font-semibold text-linen shadow-soft"
        >
          Browse wines
        </Link>
      </section>
    </main>
  );
}
