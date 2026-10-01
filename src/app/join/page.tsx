"use client";

import { useState, type FormEvent } from "react";
import { Dumbbell, CheckCircle2 } from "lucide-react";
import { locations } from "@/data/locations";

const GOALS = ["Lose weight", "Build strength", "General fitness", "Train for an event", "Recover from injury"];

export default function JoinPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: locations[0]?.id ?? "",
    goal: GOALS[0],
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    const loc = locations.find((l) => l.id === form.location);
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center sm:px-8">
        <span className="mb-5 flex size-16 items-center justify-center rounded-full bg-volt/15 text-volt-dark">
          <CheckCircle2 className="size-8" />
        </span>
        <h1 className="font-display text-3xl text-ink">You&apos;re on the list</h1>
        <p className="mt-3 text-foreground/65">
          Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ve reserved your free
          trial at <strong>{loc?.name}</strong>. A team member will call{" "}
          {form.phone || "you"} to pick a time for your first session.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-sm font-bold text-ink hover:border-ink"
        >
          Sign up another trial
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-ink py-14 text-center text-white sm:py-16">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-volt/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt">
          <Dumbbell className="size-3.5" /> Free Trial
        </span>
        <h1 className="font-display text-balance px-5 text-5xl sm:text-6xl">
          Your first class is on us
        </h1>
        <p className="mx-auto mt-3 max-w-xl px-5 text-white/70">
          No contract, no credit card. Pick a location and we&apos;ll call to set up
          your first session.
        </p>
      </section>

      <section className="mx-auto max-w-xl px-5 py-14 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-black/8 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className="input"
              />
            </Field>
            <Field label="Phone number" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+1 (512) 555-xxxx"
                className="input"
              />
            </Field>
          </div>

          <Field label="Email (optional)">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              className="input"
            />
          </Field>

          <Field label="Preferred location" required>
            <select
              required
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className="input"
            >
              {locations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} — {l.area}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Main goal" required>
            <select
              value={form.goal}
              onChange={(e) => update("goal", e.target.value)}
              className="input"
            >
              {GOALS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Anything else? (optional)">
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Previous injuries, class preferences, questions..."
              className="input resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-volt py-3 text-sm font-bold text-ink shadow-lg transition-colors hover:bg-volt-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending request…" : "Claim my free trial"}
          </button>
          <p className="text-center text-xs text-foreground/45">
            No payment info needed — we&apos;ll call to confirm your first session time.
          </p>
        </form>
      </section>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: var(--brand-volt-dark);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-volt-dark"> *</span>}
      </span>
      {children}
    </label>
  );
}
