import Link from "next/link";
import { Wine } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cellar text-linen shadow-soft">
          <Wine className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-display text-2xl font-semibold tracking-normal text-cellar">
          Cellar Notes
        </span>
      </Link>
      <nav className="flex items-center gap-2 text-sm font-medium text-ink/70">
        <Link className="rounded-full px-3 py-2 hover:bg-white/70 hover:text-cellar" href="/wines">
          Wines
        </Link>
      </nav>
    </header>
  );
}
