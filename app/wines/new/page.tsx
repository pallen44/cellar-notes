import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export default function NewWinePage() {
  return (
    <main className="paper-texture min-h-screen">
      <SiteHeader />
      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-8 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cork">
          Add a bottle
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-cellar">
          New wine entry
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-ink/68">
          The full logging flow will keep the first save quick: label, wine name, rating,
          date, and the memory around the bottle.
        </p>

        <div className="mt-8 rounded-lg border border-cellar/10 bg-white/75 p-6 shadow-soft">
          <ClipboardList className="h-8 w-8 text-cork" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-cellar">
            A quiet place for the next bottle
          </h2>
          <p className="mt-3 leading-7 text-ink/68">
            This page is reserved for the real entry form, with space for the wine details
            and the story you want to keep.
          </p>
          <Link
            href="/wines"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cellar px-5 font-semibold text-linen shadow-soft hover:bg-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to wines
          </Link>
        </div>
      </section>
    </main>
  );
}
