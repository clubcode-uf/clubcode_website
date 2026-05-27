# Club C.O.D.E. @ UF - Website

The official website for Club C.O.D.E. at the University of Florida, built with Next.js and Sanity CMS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **CMS:** [Sanity](https://www.sanity.io) (embedded studio at `/studio`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com), [DaisyUI](https://daisyui.com), [shadcn/ui](https://ui.shadcn.com)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Create a .env file with the secret keys

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity Studio

The Sanity Studio is embedded at [http://localhost:3000/studio](http://localhost:3000/studio) for content management.

## Project Structure

```
app/
  about/        # About page
  events/       # Events page (Sanity-powered)
  studio/       # Embedded Sanity Studio
  teams/        # Teams page
sanity/
  schemaTypes/  # Sanity document schemas
  lib/          # Sanity client & utilities
components/     # Shared UI components
lib/            # App-level utilities
public/         # Static assets
```
