# Club C.O.D.E. @ UF — Website

The official website for Club C.O.D.E. at the University of Florida.

Built with [Next.js](https://nextjs.org) and [Sanity](https://www.sanity.io) (our content manager).

## Run the site locally

You'll need [Node.js](https://nodejs.org) installed.

**1. Install dependencies** (first time only)

```bash
npm install
```

**2. Add the secret keys**

Create a file named `.env.local` in the main folder and paste in the project keys (ask a team lead for these):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="dev"
```

**3. Start it**

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing content (Events, Teams, Exec Board)

The text and photos on the **Events** and **Teams** pages aren't in the code — they're edited in **Sanity Studio**, a simple admin panel.

1. Open [http://localhost:3000/studio](http://localhost:3000/studio) (or `/studio` on the live site).
2. Sign in with your Sanity account. *(Need access? Ask a team lead to invite you.)*
3. Pick **Event**, **Executive**, or **Team** from the sidebar.
4. Click an item to edit it, or **Create new** to add one.
5. Fill in the fields. For exec board members you can upload a **Photo**; the **Order** number controls who shows up first.
6. Click **Publish** to make it live. 

> ⚠️ Only **published** items show on the website. If you save but don't publish, it won't appear.

## Project layout

```
app/         Pages (home, about, events, teams) + the /studio admin panel
components/  Reusable pieces of the site (navbar, cards, carousels, etc.)
sanity/      Content setup (what fields each item has, how it's fetched)
public/      Images and other static files
```

## Common commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Run the site locally while developing |
| `npm run build` | Build the site for production |
| `npm run lint` | Check the code for problems |
