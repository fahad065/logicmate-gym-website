import Link from "next/link";
import { CreditCard, Check } from "lucide-react";
import { plans, addOns } from "@/data/membership";

const FAQ = [
  {
    q: "Is there a contract?",
    a: "No. Every plan is month-to-month — cancel anytime from the app with 7 days' notice, no fees.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, up to 3 months a year, for travel or injury — just submit a freeze request in the app.",
  },
  {
    q: "What happens on my free trial?",
    a: "You get one full week of gym floor access plus one group class at any location, no card required.",
  },
  {
    q: "Can I switch plans later?",
    a: "Anytime — upgrades apply immediately, downgrades take effect on your next billing date.",
  },
];

export default function MembershipPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-volt/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
            <CreditCard className="size-3.5" /> Membership
          </span>
          <h1 className="font-display text-balance text-5xl sm:text-6xl">
            Simple pricing, no contracts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Every plan includes a 7-day free trial. Cancel or switch anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl border p-8 ${
                p.mostPopular
                  ? "border-volt bg-ink text-white shadow-xl lg:-translate-y-3"
                  : "border-black/8 bg-white"
              }`}
            >
              {p.mostPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-volt px-3 py-1 text-[11px] font-bold text-ink">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`font-display text-3xl ${p.mostPopular ? "text-white" : "text-ink"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.mostPopular ? "text-white/60" : "text-foreground/55"}`}>
                {p.tagline}
              </p>
              <p className="mt-6">
                <span className={`font-display text-5xl ${p.mostPopular ? "text-volt" : "text-ink"}`}>
                  ${p.price}
                </span>
                <span className={p.mostPopular ? "text-white/50" : "text-foreground/50"}>
                  {" "}
                  /{p.period}
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.mostPopular ? "text-volt" : "text-volt-dark"}`} />
                    <span className={p.mostPopular ? "text-white/85" : "text-foreground/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/join"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition-colors ${
                  p.mostPopular
                    ? "bg-volt text-ink hover:bg-volt-dark"
                    : "bg-ink text-white hover:bg-ink-soft"
                }`}
              >
                Start with {p.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-volt-dark">
              Add-Ons
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              Go further, on any plan
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {addOns.map((a) => (
              <div key={a.id} className="rounded-2xl border border-black/8 bg-white p-6">
                <h3 className="font-display text-xl text-ink">{a.name}</h3>
                <p className="mt-1 font-display text-2xl text-volt-dark">
                  ${a.price} <span className="font-sans text-sm font-normal text-foreground/50">{a.unit}</span>
                </p>
                <p className="mt-2 text-sm text-foreground/60">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Membership FAQ
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-xl border border-black/8 bg-white p-5">
              <h3 className="font-display text-lg text-ink">{f.q}</h3>
              <p className="mt-1.5 text-sm text-foreground/60">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-volt px-6 py-12 text-center text-ink sm:px-16">
          <h2 className="font-display text-balance text-3xl sm:text-4xl">
            Not sure which plan? Try it free first.
          </h2>
          <Link
            href="/join"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white hover:bg-ink-soft"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
