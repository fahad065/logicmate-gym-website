"use client";

import { useState } from "react";
import { Flame, Clock, Users } from "lucide-react";
import { classes, categories, schedule, days, type ClassCategory } from "@/data/classes";
import { trainers } from "@/data/trainers";

const CATEGORY_FILTERS: { value: ClassCategory | "all"; label: string }[] = [
  { value: "all", label: "All Classes" },
  ...categories.map((c) => ({ value: c, label: c })),
];

export default function ClassesPage() {
  const [filter, setFilter] = useState<ClassCategory | "all">("all");

  const filtered = filter === "all" ? classes : classes.filter((c) => c.category === filter);

  function trainerName(id: string) {
    return trainers.find((t) => t.id === id)?.name.split(" ")[0] ?? "Coach";
  }
  function className(id: string) {
    return classes.find((c) => c.id === id)?.name ?? id;
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-volt/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
            <Flame className="size-3.5" /> Class Catalog
          </span>
          <h1 className="font-display text-balance text-5xl sm:text-6xl">
            Pick your intensity
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {classes.length} class types across strength, HIIT, cycling, yoga and
            combat — every session led by a certified coach.
          </p>
        </div>
      </section>

      <section className="sticky top-[57px] z-40 border-b border-black/8 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === f.value
                  ? "border-ink bg-ink text-white"
                  : "border-black/10 bg-white text-foreground/70 hover:border-ink/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.id} className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wide text-volt-dark">
                  {c.category}
                </span>
                {c.badge && (
                  <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
                    {c.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl text-ink">{c.name}</h3>
              <p className="mt-1.5 text-sm text-foreground/60">{c.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-black/8 pt-4 text-xs font-semibold text-steel">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {c.duration} min
                </span>
                <span className="flex items-center gap-1.5">
                  <Flame className="size-3.5" /> {c.calories} cal
                </span>
                <span className="flex items-center gap-1 text-volt-dark">
                  {Array.from({ length: c.intensity }).map((_, i) => (
                    <Flame key={i} className="size-3 fill-volt-dark" />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt">
              <Users className="mb-1 inline size-4" /> Weekly Schedule
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              This week at Forge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Shown for our Downtown location — times may vary slightly at other
              branches. Book your spot in the app.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr className="bg-ink-soft">
                  {days.map((d) => (
                    <th
                      key={d}
                      className="border-b border-white/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-volt"
                    >
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {days.map((d) => (
                    <td key={d} className="w-[14.28%] border-b border-white/5 px-4 py-4 align-top">
                      <div className="space-y-3">
                        {schedule
                          .filter((s) => s.day === d)
                          .map((s, i) => (
                            <div key={i} className="rounded-lg border border-white/10 bg-ink-soft p-2.5">
                              <p className="text-[11px] font-bold text-volt">{s.time}</p>
                              <p className="mt-0.5 text-xs font-semibold text-white">
                                {className(s.classId)}
                              </p>
                              <p className="text-[11px] text-white/45">
                                w/ {trainerName(s.trainerId)}
                              </p>
                            </div>
                          ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
