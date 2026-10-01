import { Dumbbell, Users, Heart, Trophy } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { locations } from "@/data/locations";
import { trainers } from "@/data/trainers";

const VALUES = [
  {
    icon: Dumbbell,
    title: "Coached, Always",
    desc: "Every class and every floor session has a certified coach actually watching your form — not just supervising the room.",
  },
  {
    icon: Users,
    title: "A Real Community",
    desc: "Members train alongside each other for years, not months — our 90-day retention rate is proof it's working.",
  },
  {
    icon: Heart,
    title: "Recovery Matters",
    desc: "We built sauna, mobility and recovery rooms into every location because training without recovery is just injury on a delay.",
  },
  {
    icon: Trophy,
    title: "Results, Not Hype",
    desc: "No gimmick challenges — just progressive programming that actually moves the needle, tracked and reviewed quarterly.",
  },
];

const TIMELINE = [
  { year: "2016", text: "Opened our first location — a 3,000 sq ft space in Downtown Austin." },
  { year: "2018", text: "Added our first group fitness studio and hired our first dedicated coaching staff." },
  { year: "2020", text: "Opened South Congress and Westlake, each with a boxing ring and 24/7 access." },
  { year: "2022", text: "Launched Forge WOD and our personal training program under Sofia Martins." },
  { year: "2024", text: "Opened Round Rock — our 5th location, crossing 3,400 active members." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=70"
          alt="Group fitness class in a gym"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
            Our Story
          </span>
          <h1 className="font-display text-balance text-5xl sm:text-6xl">
            From one Downtown space to {locations.length} locations
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Forge Fitness started with one idea: real coaching, not just a gym floor
            and a key fob. Everything we&apos;ve built since still runs on that.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              How it started
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">
              A 3,000 sq ft space and a stubborn idea
            </h2>
            <p className="mt-4 text-foreground/65">
              In 2016, our founders opened a single Downtown Austin location with one
              rule: no member trains alone. Every session, every class, gets a real
              coach actually paying attention — not a room of machines and a vague
              hope.
            </p>
            <p className="mt-4 text-foreground/65">
              That rule is why we&apos;ve grown to {trainers.length}+ certified
              coaches across {locations.length} locations instead of just adding
              more square footage.
            </p>
          </div>
          <SafeImg
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70"
            alt="Coach spotting a member on a barbell lift"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt">
              What We Stand For
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Four things that never change
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-ink-soft p-6 text-center"
              >
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-volt/15 text-volt">
                  <v.icon className="size-6" />
                </span>
                <h3 className="font-display text-xl text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/55">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
            Our Journey
          </p>
          <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
            {locations.length} locations, one Austin at a time
          </h2>
        </div>
        <div className="space-y-0">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-volt font-display text-sm text-ink">
                  {t.year.slice(2)}
                </span>
                {i < TIMELINE.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-black/10" />
                )}
              </div>
              <div className="pb-10">
                <p className="font-display text-lg text-ink">{t.year}</p>
                <p className="mt-1 text-sm text-foreground/60">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Dumbbell className="mx-auto mb-5 size-9 text-volt" />
          <p className="font-display text-balance text-2xl leading-relaxed sm:text-3xl">
            &ldquo;We didn&apos;t want to be the biggest gym in Austin. We wanted
            every member, at every location, to get coached like they&apos;re the
            only one who matters that hour.&rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold text-volt">— Founders, Forge Fitness</p>
        </div>
      </section>
    </div>
  );
}
