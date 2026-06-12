import Link from "next/link";
import { BookOpen, Camera, Search, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { WineCard } from "@/components/WineCard";
import { wines } from "@/lib/wines";

const featureCards = [
  {
    icon: Camera,
    title: "Keep the label close",
    copy: "Each bottle starts with a warm visual anchor, so the journal feels personal at a glance."
  },
  {
    icon: Star,
    title: "Score the moment",
    copy: "A simple 1-100 rating keeps the wine easy to compare without turning it into a leaderboard."
  },
  {
    icon: BookOpen,
    title: "Remember the table",
    copy: "People, meals, occasions, and notes sit beside the wine facts that made the bottle matter."
  },
  {
    icon: Search,
    title: "Find it later",
    copy: "The cellar is built for the fragments you remember: grape, region, dinner, place, or story."
  }
];

export default function Home() {
  const featuredWine = wines[0];
  const wineCount = wines.length;

  return (
    <main className="paper-texture min-h-screen">
      <SiteHeader />
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cork">
            Personal wine memory journal
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] text-cellar sm:text-7xl">
            Cellar Notes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            A warm private journal for bottles, ratings, tasting notes, and the stories
            that turn wine into memory.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/wines"
              className="inline-flex items-center justify-center rounded-full bg-cellar px-6 py-3 font-semibold text-linen shadow-soft hover:bg-ink"
            >
              Browse cellar
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div>
              <dt className="font-display text-4xl font-semibold text-cellar">{wineCount}</dt>
              <dd className="mt-1 text-sm text-ink/60">bottles in the journal</dd>
            </div>
            <div>
              <dt className="font-display text-4xl font-semibold text-cellar">1-100</dt>
              <dd className="mt-1 text-sm text-ink/60">simple rating scale</dd>
            </div>
            <div>
              <dt className="font-display text-4xl font-semibold text-cellar">0</dt>
              <dd className="mt-1 text-sm text-ink/60">social feeds or AI layers</dd>
            </div>
          </dl>
        </div>
        {featuredWine ? (
          <div className="rounded-lg border border-cellar/10 bg-white/62 p-4 shadow-soft backdrop-blur">
            <WineCard wine={featuredWine} />
          </div>
        ) : (
          <div className="rounded-lg border border-cellar/10 bg-white/62 p-8 text-center shadow-soft backdrop-blur">
            <h2 className="font-display text-3xl font-semibold text-cellar">
              No bottles yet
            </h2>
            <p className="mt-3 leading-7 text-ink/68">
              Your first saved bottle will begin the cellar.
            </p>
          </div>
        )}
      </section>

      <section className="border-y border-cellar/10 bg-linen/80">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-lg bg-white/68 p-5">
                <Icon className="h-5 w-5 text-cork" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-semibold text-cellar">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink/65">{feature.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cork">
              From the cellar
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cellar">
              Recent bottles
            </h2>
          </div>
          <Link href="/wines" className="font-semibold text-cellar hover:text-cork">
            View all wines
          </Link>
        </div>
        {wines.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-lg bg-white/68 p-6 leading-7 text-ink/68">
            No wines are available yet.
          </p>
        )}
      </section>
    </main>
  );
}
