import { SiteHeader } from "@/components/SiteHeader";
import { WineEntryForm } from "./WineEntryForm";

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
          Save the wine facts and the memory around the bottle. Photos come later; this
          first pass keeps the entry focused and complete.
        </p>

        <WineEntryForm />
      </section>
    </main>
  );
}
