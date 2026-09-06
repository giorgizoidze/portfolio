# Giorgi Zoidze — Portfolio

Personal portfolio, built with [Next.js](https://nextjs.org) (App Router) and TypeScript.

Live profile, experience, and project case studies — no CMS, no database, content lives in [`lib/projects.ts`](./lib/projects.ts).

## Stack

- Next.js 15 (App Router), TypeScript
- `next/font` for self-hosted Google Fonts (IBM Plex Mono / IBM Plex Sans)
- `next/image` for the project screenshots
- Plain CSS (custom properties for theming — no framework)
- Dark mode: follows the OS by default, with a manual override remembered in `localStorage`

## Structure

```
app/
  layout.tsx          root layout: fonts, header, footer
  page.tsx            home page (profile, experience, projects, credentials, legend)
  projects/[slug]/     dynamic case-study route, one per project
  globals.css          design tokens + all component styles
components/
  Header.tsx           nav + theme toggle (swaps to a back-link on case-study pages)
  Footer.tsx            contact "title block"
  ProjectCard.tsx        project card on the home page
  ThemeToggle.tsx        light/dark toggle
lib/
  projects.ts            project data — add a project here to get a new card + case-study page
public/images/            project screenshots
```

## Adding a project

Add an entry to the `projects` array in `lib/projects.ts` — a card on the home page and a
`/projects/<slug>` case-study page are generated automatically.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

Deploys cleanly to [Vercel](https://vercel.com) or any Node hosting that supports Next.js.
