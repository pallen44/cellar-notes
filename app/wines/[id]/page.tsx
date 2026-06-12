import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, DollarSign, MapPin, Users, Utensils } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { WineLabel } from "@/components/WineLabel";
import { getWineById, wines } from "@/lib/wines";

type WineDetailPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return wines.map((wine) => ({ id: wine.id }));
}

export default function WineDetailPage({ params }: WineDetailPageProps) {
  const wine = getWineById(params.id);

  if (!wine) {
    notFound();
  }

  const details = [
    { icon: MapPin, label: "Location", value: wine.location },
    { icon: Users, label: "People", value: wine.people },
    { icon: Utensils, label: "Food", value: wine.foodPairing },
    { icon: Calendar, label: "Occasion", value: wine.occasion },
    { icon: DollarSign, label: "Price", value: `$${wine.price}` }
  ];

  return (
    <main className="paper-texture min-h-screen">
      <SiteHeader />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <WineLabel wine={wine} />
        </div>
        <div className="rounded-lg border border-cellar/10 bg-white/76 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cork">
            {wine.vintage} / {wine.grape}
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-cellar">
            {wine.name}
          </h1>
          <p className="mt-2 text-lg text-ink/62">
            {wine.winery} / {wine.region}, {wine.country}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-cellar px-5 py-2 font-display text-2xl font-semibold text-linen">
              {wine.rating}/100
            </span>
            <span className="rounded-full bg-cream px-5 py-2 font-semibold text-cellar">
              Tasted {wine.tastedOn}
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="rounded-md bg-linen p-4">
                  <Icon className="h-4 w-4 text-cork" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
                    {detail.label}
                  </p>
                  <p className="mt-1 font-medium text-ink">{detail.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-md bg-cream p-5">
            <h2 className="font-display text-3xl font-semibold text-cellar">Memory notes</h2>
            <p className="mt-3 leading-8 text-ink/72">{wine.notes}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/wines"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cellar px-5 font-semibold text-linen shadow-soft hover:bg-ink"
            >
              Back to wines
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
