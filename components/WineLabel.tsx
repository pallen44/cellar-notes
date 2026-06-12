import type { Wine } from "@/lib/wines";

type WineLabelProps = {
  wine: Wine;
  compact?: boolean;
};

const labelThemes: Record<Wine["labelTheme"], string> = {
  burgundy: "from-cellar to-cork",
  rioja: "from-[#7A2E24] to-[#D7A24E]",
  gold: "from-[#E5C76B] to-leaf"
};

export function WineLabel({ wine, compact = false }: WineLabelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[0.45rem] bg-gradient-to-br ${labelThemes[wine.labelTheme]} p-3 text-linen shadow-soft`}
    >
      <div className="absolute inset-x-4 top-4 h-px bg-linen/35" />
      <div className="absolute inset-x-4 bottom-4 h-px bg-linen/35" />
      <div
        className={`label-sheen flex ${compact ? "min-h-48" : "min-h-72"} flex-col justify-between rounded-[0.35rem] border border-white/60 p-5 text-center text-ink`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cellar/65">
            {wine.region}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-none text-cellar">
            {wine.winery}
          </h2>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">{wine.name}</p>
          <p className="mt-2 text-sm text-ink/65">
            {wine.vintage} / {wine.grape}
          </p>
        </div>
        <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cellar/20 font-display text-2xl font-bold text-cellar">
          {wine.rating}
        </p>
      </div>
    </div>
  );
}
