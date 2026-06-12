import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import type { Wine } from "@/lib/wines";
import { WineLabel } from "./WineLabel";

type WineCardProps = {
  wine: Wine;
};

export function WineCard({ wine }: WineCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-cellar/10 bg-white/78 shadow-soft backdrop-blur">
      <WineLabel wine={wine} compact />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cork">
              {wine.vintage} / {wine.grape}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-cellar">
              {wine.name}
            </h2>
            <p className="mt-1 text-sm text-ink/65">{wine.winery}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-cream px-3 py-1 text-sm font-semibold text-cellar">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            {wine.rating}
          </div>
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-ink/72">{wine.notes}</p>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm">
          <span className="flex min-w-0 items-center gap-2 text-ink/60">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{wine.region}</span>
          </span>
          <Link
            href={`/wines/${wine.id}`}
            className="flex items-center gap-1 font-semibold text-cellar hover:text-cork"
          >
            Open
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
