"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Timer } from "lucide-react";
import { locations, areas } from "@/data/locations";

export default function LocationsPage() {
  const [areaFilter, setAreaFilter] = useState<string>("all");

  const filtered = areaFilter === "all" ? locations : locations.filter((l) => l.area === areaFilter);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-volt/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
            <MapPin className="size-3.5" /> {locations.length} Locations
          </span>
          <h1 className="font-display text-balance text-5xl sm:text-6xl">
            Find your Forge
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            One membership, every location — from Downtown to Round Rock.
          </p>
        </div>
      </section>

      <section className="border-b border-black/8 bg-background/95">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          <button
            onClick={() => setAreaFilter("all")}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              areaFilter === "all"
                ? "border-ink bg-ink text-white"
                : "border-black/10 bg-white text-foreground/70 hover:border-ink/40"
            }`}
          >
            All Areas
          </button>
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setAreaFilter(area)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                areaFilter === area
                  ? "border-ink bg-ink text-white"
                  : "border-black/10 bg-white text-foreground/70 hover:border-ink/40"
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
            >
              <span
                className="mb-2 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                style={
                  loc.is24h
                    ? { color: "#1a7a1a", backgroundColor: "#1a7a1a18" }
                    : { color: "#a0d600", backgroundColor: "#c6ff2e22" }
                }
              >
                <Timer className="size-3" />
                {loc.is24h ? "Open 24/7" : "Daily Hours"}
              </span>
              <h3 className="font-display text-xl text-ink">{loc.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/45">
                {loc.area}
              </p>

              <div className="mt-3 space-y-2.5 text-sm text-foreground/65">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-volt-dark" />
                  {loc.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-volt-dark" />
                  <a href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`} className="hover:text-ink">
                    {loc.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-4 shrink-0 text-volt-dark" />
                  {loc.hours}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-black/8 pt-4">
                {loc.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/70"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
