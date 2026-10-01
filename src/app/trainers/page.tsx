import { Users, Award } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { trainers } from "@/data/trainers";

export default function TrainersPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-volt/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
            <Users className="size-3.5" /> Our Coaches
          </span>
          <h1 className="font-display text-balance text-5xl sm:text-6xl">
            Coaches who actually coach
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {trainers.length} certified trainers across strength, cycling, combat,
            yoga and conditioning — every class, every session.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <div
              key={t.id}
              className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm"
            >
              <div className="h-56 overflow-hidden">
                <SafeImg src={t.img} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{t.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-volt-dark">
                  {t.role}
                </p>
                <p className="mt-3 text-sm text-foreground/65">{t.bio}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-2 border-t border-black/8 pt-4 text-xs text-foreground/55">
                  <Award className="mt-0.5 size-3.5 shrink-0 text-volt-dark" />
                  <span>{t.certifications.join(" · ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
