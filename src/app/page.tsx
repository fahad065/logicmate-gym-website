import Link from "next/link";
import {
  Dumbbell,
  Flame,
  Users,
  MapPin,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Trophy,
} from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";
import { plans } from "@/data/membership";
import { locations, areas } from "@/data/locations";

const FEATURED_CLASSES = [
  { c: classes[0], img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=70" },
  { c: classes[2], img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70" },
  { c: classes[5], img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=70" },
  { c: classes[9], img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=70" },
];

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Real Equipment, Real Space",
    desc: "Full free-weight floors, dedicated platforms and strongman rigs — not a room of machines.",
  },
  {
    icon: Users,
    title: "Coached, Not Just Supervised",
    desc: "Every class is led by a certified coach actually correcting your form, every session.",
  },
  {
    icon: Zap,
    title: "5 Locations, One Membership",
    desc: "Train at whichever Forge is closest — your Pro or Elite membership works at all of them.",
  },
  {
    icon: Heart,
    title: "Recovery Built In",
    desc: "Sauna, mobility sessions and a recovery room — because growth happens outside the gym too.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Down 32 lbs in 8 months and I actually look forward to the Forge Strength sessions. The coaching makes the difference.",
    name: "Daniel K.",
    place: "Member since 2023, Downtown",
  },
  {
    quote: "I've tried four gyms in Austin. This is the only one where a coach has ever actually fixed my deadlift form.",
    name: "Priya R.",
    place: "Member since 2022, Westlake",
  },
  {
    quote: "The Round Rock location got me back into a routine after two kids. The childcare at North Austin is a lifesaver on weekends.",
    name: "Maria S.",
    place: "Member since 2024, Round Rock",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=70"
          alt="Athlete lifting a barbell in a gym"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-volt/40 bg-ink/60 px-4 py-1.5 text-xs font-bold tracking-widest text-volt uppercase">
            <Flame className="size-3.5" /> Strength · HIIT · Cycling · Combat · Yoga
          </span>
          <h1 className="font-display text-balance text-5xl leading-[0.95] sm:text-7xl">
            Train harder.
            <br />
            <span className="text-volt">Recover smarter.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-white/75 sm:text-lg">
            Forge Fitness brings real coaching, real equipment and real results to{" "}
            {locations.length} locations across Austin — plus a first class on us.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              className="animate-pulse-ring rounded-full bg-volt px-8 py-3.5 text-sm font-bold text-ink shadow-lg transition-colors hover:bg-volt-dark"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/classes"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-volt hover:text-volt"
            >
              Browse Classes
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-4 gap-4 border-t border-white/15 pt-8">
            <Stat value={`${locations.length}`} label="Locations" />
            <Stat value={`${classes.length}+`} label="Class Types" />
            <Stat value={`${trainers.length}`} label="Coaches" />
            <Stat value="3,400+" label="Members" />
          </div>
        </div>
      </section>

      {/* Featured classes */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              Signature Classes
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              Pick your intensity
            </h2>
          </div>
          <Link
            href="/classes"
            className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-ink hover:text-volt-dark"
          >
            See full schedule <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_CLASSES.map(({ c, img }) => (
            <div
              key={c.id}
              className="group overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden">
                <SafeImg
                  src={img}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {c.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-volt px-2.5 py-1 text-[11px] font-bold text-ink">
                    {c.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-steel">
                  {c.category}
                </p>
                <h3 className="font-display mt-0.5 text-xl text-ink">{c.name}</h3>
                <p className="mt-1.5 text-sm text-foreground/60">{c.description}</p>
                <p className="mt-2 text-xs font-semibold text-steel">
                  {c.duration} min · {c.calories} cal
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt">
              Why Forge Fitness
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Built for real training, not just a membership card
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-ink-soft p-6 text-center"
              >
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-volt/15 text-volt">
                  <f.icon className="size-6" />
                </span>
                <h3 className="font-display text-xl text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              Meet the Team
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              Coaches who actually coach
            </h2>
          </div>
          <Link
            href="/trainers"
            className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-ink hover:text-volt-dark"
          >
            Meet the full team <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.slice(0, 4).map((t) => (
            <div key={t.id} className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
              <div className="h-48 overflow-hidden">
                <SafeImg src={t.img} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-ink">{t.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-volt-dark">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership preview */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              Membership
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              Simple pricing, no contracts
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-2xl border p-7 ${
                  p.mostPopular
                    ? "border-volt bg-ink text-white shadow-xl"
                    : "border-black/8 bg-white"
                }`}
              >
                {p.mostPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-volt px-3 py-1 text-[11px] font-bold text-ink">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-display text-2xl ${p.mostPopular ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${p.mostPopular ? "text-white/60" : "text-foreground/55"}`}>
                  {p.tagline}
                </p>
                <p className="mt-5">
                  <span className={`font-display text-4xl ${p.mostPopular ? "text-volt" : "text-ink"}`}>
                    ${p.price}
                  </span>
                  <span className={p.mostPopular ? "text-white/50" : "text-foreground/50"}>
                    {" "}
                    /{p.period}
                  </span>
                </p>
                <Link
                  href="/join"
                  className={`mt-6 block rounded-full py-2.5 text-center text-sm font-bold transition-colors ${
                    p.mostPopular
                      ? "bg-volt text-ink hover:bg-volt-dark"
                      : "bg-ink text-white hover:bg-ink-soft"
                  }`}
                >
                  Choose {p.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/membership" className="text-sm font-bold text-ink hover:text-volt-dark">
              Compare all plan features →
            </Link>
          </p>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              Find Us
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              {locations.length} locations across Austin
            </h2>
            <p className="mt-4 text-foreground/65">
              From Downtown to Round Rock, there&apos;s a Forge Fitness near you — two
              locations open 24 hours, all five on one Pro membership.
            </p>
            <Link
              href="/locations"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink-soft"
            >
              View all locations <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex items-center gap-2.5 rounded-xl border border-black/8 bg-white px-4 py-3.5"
              >
                <MapPin className="size-4 shrink-0 text-volt-dark" />
                <div>
                  <p className="text-sm font-semibold text-ink">{loc.area}</p>
                  <p className="text-xs text-foreground/50">
                    {loc.is24h ? "Open 24/7" : loc.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-foreground/40">
          Serving {areas.length} Austin-area neighborhoods
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt">
              Member Results
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Straight from our members
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-ink-soft p-6">
                <div className="mb-3 flex gap-0.5 text-volt">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-volt" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-volt px-6 py-14 text-center text-ink sm:px-16">
          <Trophy className="size-10" />
          <h2 className="font-display text-balance text-4xl sm:text-5xl">
            Your first class is on us
          </h2>
          <p className="max-w-xl text-ink/80">
            Book a free trial class at any of our {locations.length} locations — no
            contract, no credit card required.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white hover:bg-ink-soft"
            >
              Start Free Trial
            </Link>
            <Link
              href="/membership"
              className="rounded-full border border-ink/30 px-8 py-3.5 text-sm font-bold text-ink hover:bg-ink/10"
            >
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-volt sm:text-4xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/55">{label}</p>
    </div>
  );
}
