# Forge Fitness — Demo Gym Website

A standalone, frontend-only Next.js demo site built to showcase the LogicMate
chatbot widget on a realistic gym/fitness brand. **This is not a real
business** — content, trainers, classes, locations, phone numbers and quotes
are illustrative, built to look like a real, live gym chain site for demo
purposes only.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` + `react-icons/fa` for icons
- `Bebas Neue` (display/headings) + `Inter` (body) via `next/font/google`
- No backend, no database, no API calls — every page is static, all content
  lives in `src/data/*.ts`. Forms (Join / Free Trial, Contact) simulate a
  network request and show a success state, but submit nowhere.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

- `/` — Home
- `/classes` — Full class catalog (12 class types, category filters) + weekly schedule table
- `/trainers` — Coaching staff bios
- `/membership` — Basic / Pro / Elite pricing, add-ons, FAQ
- `/locations` — All 5 Austin-area branches, filterable by area
- `/about` — Brand story, values, timeline
- `/join` — Free trial signup form (mock submit)
- `/contact` — Contact form (mock submit)

## Adding the LogicMate chatbot widget

Open `src/app/layout.tsx` and find the commented placeholder inside `<head>`.
Paste the `<script>` snippet from your chatbot's **Channels → Website** tab
right there — it self-injects a floating chat bubble, nothing else on the
page needs to change.

```tsx
<script>
  window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
</script>
<script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>
```

## Notes

- Images are hotlinked from Unsplash and gracefully fall back to a branded
  dark gradient placeholder (`src/components/safe-img.tsx`) if a URL ever
  fails to load — verify these render correctly on the machine you're
  demoing from.
- All classes, trainers, pricing, locations, addresses and phone numbers are
  fabricated for demo purposes.
