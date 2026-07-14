# Handover - For the Next Web Dev Lead

This is the "everything I wish someone had told me" doc. Read this once and
you'll know how the whole site fits together.

## How the site works (big picture)

- **Next.js** builds the site as static pages - plain HTML generated ahead of
  time. There's no server or database of our own to maintain.
- **Sanity** is our content manager. Events, Teams, and Exec Board info live
  there and get pulled in when the site builds. Editors change them through
  Sanity Studio (see [sanity-studio.md](sanity-studio.md)).
- Because pages are pre-built, **content changes appear after a redeploy** -
  publishing in Studio alone doesn't update the live site.

```
Edit in Studio → Publish → Redeploy → change is live
```

## What's edited where

| Thing | Where to change it |
| --- | --- |
| Events, Teams, Exec Board | Sanity Studio (`/studio`) - no code |
| Home page text, About story, social links | In the code (see map below) |
| Colors, fonts, layout | In the code (Tailwind CSS classes) |

## Map of the code

```
app/         One folder per page: / (home), /about, /events, /teams,
             and /studio (the admin panel - don't delete this!)
components/  Reusable pieces. The big ones:
             - Navbar.tsx      → the top navigation (add new page links here)
             - Coverflow.tsx   → the 3D carousel engine (home + exec board both use it)
             - InfoCard.tsx    → the card used on Events AND Teams
             - Terminal.tsx / Typewriter.tsx → the typing animations
sanity/      Content setup: what fields exist (schemaTypes/) and how the
             site fetches them (lib/queries.ts)
public/      Images (logo, etc.)
docs/        You are here
```

Common edits:
- **Change the About story** → the `story` text at the top of `app/about/page.tsx`
- **Change home page text / social links** → `app/page.tsx`
- **Add a page** → create `app/yourpage/page.tsx`, add a link in `components/Navbar.tsx`
- **Add a field to events/teams/execs** → `sanity/schemaTypes/`, then also
  select it in `sanity/lib/queries.ts` and show it on the page

## Running it locally

Follow the main [README](../README.md). Short version:

```bash
npm install        # first time only
npm run dev        # then open http://localhost:3000
```

You'll need a `.env.local` file with two values (they're in the README and
aren't really secret - they just say which Sanity project to read from):

```
NEXT_PUBLIC_SANITY_PROJECT_ID="39kk9pla"
NEXT_PUBLIC_SANITY_DATASET="dev"
```

Before pushing changes, check nothing broke:

```bash
npm run lint       # code style / mistakes
npm run build      # makes sure the site actually builds
```

## Accounts you need

Collect these from the outgoing lead - this is the most important part of
the handover:

1. **GitHub** - access to the repo (the `clubcode-uf` organization).
2. **Sanity** - admin on the project at [sanity.io/manage](https://www.sanity.io/manage)
   (project ID `39kk9pla`), so you can invite future editors.
3. **Hosting** (e.g. Vercel) - access to the dashboard where the site deploys,
   so you can redeploy and see build errors.

## Things that look like bugs but aren't

- **Events page is empty** → all events in Studio have past dates. The page
  only shows upcoming events on purpose.
- **Published content isn't on the live site** → needs a redeploy (static site).
- **A change works locally but not live** → same thing: redeploy.
- **Exec member shows a letter instead of a face** → no photo uploaded;
  that's the built-in fallback.

## House rules that kept things sane

- Work on a branch, open a pull request into `main` - don't push to `main`
  directly. A security scan (CodeQL) runs on every PR automatically.
- Run `npm run lint` and `npm run build` before opening a PR.
- Content questions → Studio. Design/layout questions → code. Keeping that
  line clean is what makes the site easy for non-coders to help with.
