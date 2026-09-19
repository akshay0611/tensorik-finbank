# Tensorik FinBank

A polished digital banking experience — a capability demo by **Tensorik Technologies**, built entirely as a frontend showcase with fictional data.

## Overview

Tensorik FinBank is a single-page-style Next.js application that simulates a full internet banking product: account management, transfers, cards, analytics, statements, and user settings. Every screen is wired together through a shared client-side data store, so actions (transferring money, freezing a card, pausing a scheduled payment, editing the profile) immediately reflect everywhere in the app — Dashboard, Transactions, Analytics, and Statements stay in sync.

There is no backend. All accounts, transactions, cards, beneficiaries, and transfers live in `lib/mock-data.ts` and are held in a React Context (`BankProvider`) that lives at the root layout so state persists across route navigation.

## Features

- **Dashboard** — live totals, account cards, cash flow and spending charts, recent activity
- **Accounts** — account cards, balances, per-account detail views and activity
- **Transactions** — searchable, filterable, sortable list with a detail drawer (editable categories)
- **Cards** — debit / credit / virtual cards with freeze-unfreeze and usage toggles
- **Transfers** — multi-step money movement flow with review and success states, plus payment history
- **Beneficiaries** — add / edit / delete saved recipients
- **Scheduled Payments** — recurring payments with pause / resume
- **Analytics** — income vs. expenses, spending breakdown, account-level insights
- **Statements** — monthly statement cards with per-account, per-period details and CSV download
- **Profile, Preferences, Security, Settings, Help Center** — utility pages with local persistence

## Tech Stack

| Layer     | Choice                            |
| --------- | --------------------------------- |
| Framework | Next.js 16 (App Router)           |
| UI        | React 19, TypeScript 5.7          |
| Styling   | Tailwind CSS 4                    |
| Charts    | Recharts                          |
| Icons     | lucide-react                      |
| Package   | pnpm (v12.3.4)                    |

## Getting Started

```bash
# install dependencies
pnpm install

# start the development server
pnpm dev

# open http://localhost:3000
```

If `pnpm` fails on this repo, run through the local binaries instead:

```bash
node_modules/.bin/next dev
```

## Scripts

| Command       | Description                     |
| ------------- | ------------------------------- |
| `pnpm dev`    | Start the dev server            |
| `pnpm build`  | Validate types and build        |
| `pnpm start`  | Serve the production build      |

> The production build runs full TypeScript validation (`tsc`-equivalent, enforced by Next.js) plus `next build`.

## Project Structure

```
app/                  # App Router routes (one folder per module)
components/
  banking-app.tsx     # App shell: sidebar, header, content routing
  phase3-pages.tsx    # Cards, transfers, beneficiaries, scheduled + BankProvider context
  phase4-pages.tsx    # Analytics, statements
  accounts-page.tsx   # Accounts list + account detail
  transactions-page.tsx
  utility-pages.tsx   # Profile, preferences, security, settings, help
  ui/                 # Small shared UI primitives
lib/
  mock-data.ts        # All fictional seed data + types
  profile.ts          # Profile hook synced to localStorage
```

## Demo Notes

- All data is **fictional** and generated locally — nothing is persisted to a server.
- Profile edits (Profile → Edit Profile) propagate to the sidebar, header, dashboard greeting, and cardholder name via a shared `useProfile` hook.
- Transfers create real transactions in context, so balances and analytics update immediately.
- No environment variables or API keys are required.

## Author

Built as a demo by [Tensorik Technologies](https://github.com/akshay0611).