export type Project = {
  slug: string;
  sheet: string; // e.g. "A3.1"
  name: string;
  roleTag: string;
  role: string;
  timeline: string;
  stack: string[];
  liveUrl: string;
  summary: string; // short, for the home page card
  images: { src: string; alt: string; width: number; height: number }[];
  paragraphs: string[]; // full case-study copy
  gallery?: {
    title: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
  }[]; // optional detail gallery: screen + deeper technical writeup
};

export const projects: Project[] = [
  {
    slug: "ianua",
    sheet: "A3.1",
    name: "Ianua",
    roleTag: "CO-FOUNDER · FRONTEND",
    role: "Co-Founder & Frontend Developer",
    timeline: "Jul 2026 — Present",
    stack: ["Next.js", "TypeScript", "Product design"],
    liveUrl: "https://ianua.io",
    summary:
      "A zero-trust identity and access gateway for apps and AI agents. Co-founded the product and own the frontend end to end — marketing site, docs, and the in-app dashboard.",
    images: [
      {
        src: "/images/ianua-1.jpg",
        alt: "Ianua homepage hero: 'The front door for your apps — and it never lets the wrong person in.'",
        width: 1000,
        height: 515,
      },
    ],
    paragraphs: [
      "Ianua is a zero-trust identity and access gateway: it checks who — or what — is behind every request, person or AI agent, and decides whether it's allowed before traffic ever reaches the backend. Every decision is written to a tamper-evident log, so access can be audited after the fact, not just enforced in the moment.",
      "As a co-founder, I own the frontend end to end. On the marketing site, the pricing section pulls live plan data and drives a monthly/annual toggle with an accessible aria-pressed switch; the FAQ is a hand-built two-column accordion — no library — that animates open and closed with a CSS grid-rows trick and tracks a single open item at a time. Scroll-triggered reveals across the site run on a small IntersectionObserver hook I wrote myself, with a prefers-reduced-motion fallback, rather than an animation library.",
      "The hero's door imagery is hand-authored line-art SVG that steps through locked → authenticating → access-granted states as you scroll. But the clearest expression of \"verified, denied, allowed\" actually lives inside the dashboard: I built a live access-check tool that mints a token and fires a real probe through the gateway, then renders whether it was allowed or refused, the status code, latency, and reason. Elsewhere in the dashboard I've shipped permission-gated UI resolved from a react-query-fetched permission set, mutations that cascade into audit-log invalidation, and forms backed by around thirty Zod schemas — including one with cross-field validation that changes which fields are required depending on the routing policy selected.",
      "Being a co-founder rather than a contractor changes the job: frontend decisions here aren't separate from product ones — what a visitor sees first, how much technical detail belongs on the homepage versus the docs, how the pricing tiers should be framed. That overlap has been the biggest difference from client work.",
    ],
    gallery: [
      {
        title: "A configurable pipeline, not a fixed gate",
        src: "/images/Pipelines.png",
        alt: "API protection pipeline showing five ordered stages — locked Identity and Policy stages, then Rate limiting, Threat protection, and Data protection, each active and reorderable",
        width: 2700,
        height: 1800,
        description:
          "Every request to a protected API runs through an ordered pipeline instead of one pass/fail check. Identity and Policy are the two default stages — locked in place, always first — verifying who's calling and evaluating access rules before anything else runs. Past that, a tenant can add, reorder by drag handle, or disable purpose-built stages — rate limiting, threat protection, response redaction — tightening or loosening enforcement without touching the two stages underneath that can't be turned off.",
      },
      {
        title: "Auth health, tenant usage, and activity in one view",
        src: "/images/Overview.png",
        alt: "Overview dashboard with authentication latency, success rate, and failed login attempts at top, usage metrics below, a calendar heatmap of access decisions, and a recent activity feed",
        width: 2700,
        height: 1800,
        description:
          "The dashboard's top row is deliberately about trust signals, not vanity metrics — authentication latency, success rate, and failed login attempts, each measured against the last 30 days rather than shown as a bare number. Below it, a GitHub-style heatmap plots access decisions per day so a spike in denials or a quiet stretch is visible at a glance, and the recent-activity feed surfaces exactly the events worth a second look — a new passkey, an agent granted access, a denied request — linking straight into the full audit log.",
      },
      {
        title: "Delegation chains with a budget and a leash",
        src: "/images/delegations.png",
        alt: "Agent delegation detail: a Q3 ledger reconciliation delegation two hops deep in a Maya Chen to Ledger Reconciler to Invoice Reviewer chain, showing drift mode, scoped capabilities, expiry, budget, and granted resources",
        width: 2700,
        height: 1800,
        description:
          "An agent can hand off part of its own access to another agent, but not without limits. This delegation sits two hops deep in a chain that started with a human, with exactly one hop of re-delegation left, and is bound to a specific task with its own expiry and a request budget that ticks down as it's used. Resources are granted individually by permission level — reader, viewer, editor — rather than inherited wholesale from the parent, and drift mode enforces a hard threshold automatically if the agent's real behavior strays from what the delegation describes.",
      },
      {
        title: "Every access decision, with the reasoning attached",
        src: "/images/audit.png",
        alt: "Audit log table filtered by person and date range, with an expanded 'Access request denied' row showing the decision, policy, identity, and request details behind it",
        width: 2700,
        height: 1800,
        description:
          "The audit log doesn't just record that a request was denied — it expands into the actual decision: which policy fired, the identity's method and risk score, and the exact route and country the request came from. That level of detail is what turns thousands of log rows from a compliance checkbox into something a security team can use to actually answer \"why was this blocked,\" filterable by person, event type, and date range, and exportable to CSV for anything that needs to leave the dashboard.",
      },
    ],
  },
  {
    slug: "kakheti-selection",
    sheet: "A3.2",
    name: "Kakheti Selection",
    roleTag: "FREELANCE · FRONTEND",
    role: "Freelance Frontend Developer",
    timeline: "May 2026 — Jul 2026",
    stack: ["React", "i18n", "SEO"],
    liveUrl: "https://kakhetiselection.com",
    summary:
      "Bilingual (FR/EN) e-commerce site exporting Georgian wine, chacha and cognac to Europe. Built the storefront frontend with SEO and social-sharing set up for the French market.",
    images: [
      {
        src: "/images/kakheti-1.jpg",
        alt: "Kakheti Selection homepage hero: 'Eight thousand years in a single bottle' over a sunset vineyard photo, with Explore Collection and Discover Boxes buttons",
        width: 1000,
        height: 515,
      },
    ],
    paragraphs: [
      "Kakheti Selection is an e-commerce storefront exporting Georgian wine, chacha and cognac to Europe, built bilingually for the French and English markets. I was brought in as a freelance frontend developer to build out the storefront.",
      "The core of the build was the Wine Collection page: a client-side filterable, sortable grid of the catalogue, with free-text search, a category filter (red, white, rosé, orange wine, brandy), sort by newest, oldest, or price, and a price-range slider.",
      "Partway through the project I migrated the app off TanStack Start's server-rendered entry points to a pure client-rendered SPA — removing the dedicated server file and the SSR routing glue — so the storefront ships and deploys as a static client bundle instead of needing a Node server to render pages.",
      "I also handled the pieces that make a small commerce site feel finished: per-route SEO metadata, Open Graph tags, canonical/hreflang links and JSON-LD product markup for the French market; a full-screen age-verification gate for compliance; and a hand-rolled FR/EN translation layer that detects language from the domain. Checkout hands off to Stripe, showing a pending state while it redirects and a confirmation screen on return, and the cart is a persisted Zustand store with stock-clamping logic across wine boxes and individual bottles.",
    ],
  },
  {
    slug: "expense-tracker",
    sheet: "A3.3",
    name: "Expense Tracker",
    roleTag: "PERSONAL PROJECT · FULL-STACK",
    role: "Full-Stack Developer",
    timeline: "Sep 2026",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "https://expense-tracker-tau-blue-23.vercel.app",
    summary:
      "A group expense splitter that goes beyond a running total: it computes the minimum set of payments needed to settle everyone up. Built solo, end to end, with its own auth, database schema, and test suite.",
    images: [
      {
        src: "/images/expense-tracker-1.jpg",
        alt: "Expense Tracker landing page: 'Split shared expenses with a settlement plan that minimizes how many payments it takes to actually square everyone up,' with Log in and Sign up buttons",
        width: 1000,
        height: 515,
      },
    ],
    paragraphs: [
      "Expense Tracker is a solo full-stack project for splitting shared costs within a group — rent, trips, dinners — without the usual spreadsheet math. People create a group, add expenses with equal, exact, or percentage splits, and the app tracks who owes whom. The part that made it worth building rather than using an existing app: instead of just listing every individual debt, it reduces them down to the fewest possible payments that settle the whole group.",
      "The backend is Next.js API routes on a Prisma/PostgreSQL schema (users, groups, members, expenses, splits), with its own JWT-based auth using jose and bcrypt for password hashing rather than an off-the-shelf auth library. Every request body is validated with Zod, and a shared AppError type plus a withErrorHandling wrapper turn expected failures into consistent, specific API error responses instead of generic 500s.",
      "The core logic — split calculation and settlement — is isolated in plain TypeScript modules with a Vitest suite, deliberately kept framework-agnostic so it's cheap to test. The settlement function is a greedy minimum-cash-flow algorithm: repeatedly matching the largest creditor with the largest debtor until every balance is within a cent of zero. One test locks in a real bug I hit in production — an EXACT split that didn't sum to the total was crashing with an unhandled error — it now fails cleanly with a specific message instead.",
      "Most of a later pass went into UI polish that isn't visible in the API: a custom Modal/Toast/Confirm system built on React context so no screen ever calls window.alert or window.confirm, loading and disabled states on every button that triggers a request, and a small dark, avatar-and-badge design system shared across the dashboard and group pages.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
