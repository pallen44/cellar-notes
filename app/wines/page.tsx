import { SiteHeader } from "@/components/SiteHeader";
import { WineCard } from "@/components/WineCard";
import { wines } from "@/lib/wines";

export default function WinesPage() {
  return (
    <main className="paper-texture min-h-screen">
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cork">
              Browse cellar
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold text-cellar">
              Wine journal
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-ink/68">
              A small mock cellar to shape the browsing experience before real entries are
              connected.
            </p>
          </div>
        </div>

        {wines.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-lg bg-white/68 p-6 leading-7 text-ink/68">
            No sample wines are available yet.
          </p>
        )}
      </section>
    </main>
  );
}
