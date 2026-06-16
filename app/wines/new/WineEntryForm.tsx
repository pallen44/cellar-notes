"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { createWineEntry, isValidRating, type NewWineEntry } from "@/lib/wineEntries";

const inputClass =
  "mt-2 min-h-12 w-full rounded-md border border-cellar/15 bg-white px-4 text-base text-ink shadow-sm outline-none transition focus:border-cellar focus:ring-2 focus:ring-cork/25";
const textAreaClass =
  "mt-2 min-h-32 w-full rounded-md border border-cellar/15 bg-white px-4 py-3 text-base leading-7 text-ink shadow-sm outline-none transition focus:border-cellar focus:ring-2 focus:ring-cork/25";
const labelClass = "text-sm font-semibold text-cellar";
const hintClass = "mt-1 text-xs leading-5 text-ink/55";

function optionalText(formData: FormData, name: string): string | null {
  const value = String(formData.get(name) ?? "").trim();
  return value.length > 0 ? value : null;
}

function requiredText(formData: FormData, name: string, label: string): string {
  const value = String(formData.get(name) ?? "").trim();

  if (!value) {
    throw new Error(`${label} is required.`);
  }

  return value;
}

function optionalInteger(formData: FormData, name: string, label: string): number | null {
  const rawValue = String(formData.get(name) ?? "").trim();

  if (!rawValue) {
    return null;
  }

  const value = Number(rawValue);

  if (!Number.isInteger(value) || value < 1) {
    throw new Error(`${label} must be a positive whole number.`);
  }

  return value;
}

function requiredNumber(formData: FormData, name: string, label: string): number {
  const rawValue = String(formData.get(name) ?? "").trim();

  if (!rawValue) {
    throw new Error(`${label} is required.`);
  }

  const value = Number(rawValue);

  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`${label} must be zero or greater.`);
  }

  return value;
}

function requiredRating(formData: FormData): number {
  const rawValue = String(formData.get("rating") ?? "").trim();
  const rating = Number(rawValue);

  if (!rawValue || !isValidRating(rating)) {
    throw new Error("Rating must be an integer from 1 to 100.");
  }

  return rating;
}

function buildWineEntry(formData: FormData): NewWineEntry {
  return {
    winery: requiredText(formData, "winery", "Winery"),
    wine_name: requiredText(formData, "wine_name", "Wine name"),
    vintage: optionalInteger(formData, "vintage", "Vintage"),
    grape: optionalText(formData, "grape"),
    region: requiredText(formData, "region", "Region"),
    country: optionalText(formData, "country"),
    price: requiredNumber(formData, "price", "Price"),
    location: optionalText(formData, "location"),
    people: optionalText(formData, "people"),
    food_pairing: optionalText(formData, "food_pairing"),
    occasion: optionalText(formData, "occasion"),
    notes: optionalText(formData, "notes"),
    rating: requiredRating(formData),
    photo_path: null
  };
}

export function WineEntryForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const entry = buildWineEntry(new FormData(event.currentTarget));
      await createWineEntry(entry, createBrowserSupabaseClient());
      router.push("/wines?created=1");
      router.refresh();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not save wine entry.");
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
      <section className="rounded-lg border border-cellar/10 bg-white/78 p-5 shadow-soft sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cork">
            Bottle
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cellar">
            What did you open?
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Winery <span className="text-cork">(required)</span>
            <input className={inputClass} name="winery" type="text" autoComplete="organization" />
          </label>

          <label className={labelClass}>
            Wine name <span className="text-cork">(required)</span>
            <input className={inputClass} name="wine_name" type="text" autoComplete="off" />
          </label>

          <label className={labelClass}>
            Vintage
            <input className={inputClass} name="vintage" type="number" inputMode="numeric" min="1" />
          </label>

          <label className={labelClass}>
            Grape
            <input className={inputClass} name="grape" type="text" autoComplete="off" />
          </label>

          <label className={labelClass}>
            Region <span className="text-cork">(required)</span>
            <input className={inputClass} name="region" type="text" autoComplete="address-level1" />
          </label>

          <label className={labelClass}>
            Country
            <input className={inputClass} name="country" type="text" autoComplete="country-name" />
          </label>
        </div>
      </section>

      <section className="rounded-lg border border-cellar/10 bg-white/78 p-5 shadow-soft sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cork">
            Taste
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cellar">
            Score the bottle
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Rating <span className="text-cork">(required)</span>
            <input
              className={inputClass}
              name="rating"
              type="number"
              inputMode="numeric"
              min="1"
              max="100"
              step="1"
            />
            <span className={hintClass}>Use a whole number from 1 to 100.</span>
          </label>

          <label className={labelClass}>
            Price <span className="text-cork">(required)</span>
            <input
              className={inputClass}
              name="price"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
            />
          </label>
        </div>
      </section>

      <section className="rounded-lg border border-cellar/10 bg-white/78 p-5 shadow-soft sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cork">
            Memory
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cellar">
            Remember the table
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Location
            <input className={inputClass} name="location" type="text" autoComplete="off" />
          </label>

          <label className={labelClass}>
            People
            <input className={inputClass} name="people" type="text" autoComplete="off" />
          </label>

          <label className={labelClass}>
            Food pairing
            <input className={inputClass} name="food_pairing" type="text" autoComplete="off" />
          </label>

          <label className={labelClass}>
            Occasion
            <input className={inputClass} name="occasion" type="text" autoComplete="off" />
          </label>
        </div>

        <label className={`${labelClass} mt-4 block`}>
          Notes
          <textarea className={textAreaClass} name="notes" />
        </label>
      </section>

      {error ? (
        <p
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
        >
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cellar px-6 font-semibold text-linen shadow-soft transition hover:bg-ink disabled:cursor-not-allowed disabled:bg-ink/45"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Save className="h-4 w-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Saving" : "Save wine"}
        </button>
        <p className="text-sm leading-6 text-ink/58">
          You will return to the wine journal after the entry is saved.
        </p>
      </div>
    </form>
  );
}
