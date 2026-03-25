# GenFlat Rebuild — Project Instructions

## Project
Rebuilding genflat.com for GenFlat Holdings, Inc.
Reference live site: https://www.genflat.com

## Stack
- Next.js 14 (App Router, TypeScript, Tailwind CSS)
- Payload CMS v3 (runs inside Next.js, single repo/deploy)
- SQLite locally → PostgreSQL in production (Neon or Railway)
- Vercel for deployment

## Client CMS Requirements
The client needs to edit copy, images, videos, and news posts
without developer involvement. Everything editable is modeled
as a Payload Global or Collection field. Layout is never
directly exposed to the client.

## Key Pages
- `/` — Single-page marketing site (7 sections)
- `/news` — News listing + individual article pages
- `/investor-information` — Static investor page

## Payload Content Model
- Globals: HomePage, SiteSettings, InvestorPage
- Collections: NewsArticles, Media, Users

## Design Tokens
Dark navy/charcoal backgrounds, gold/amber accent, white text.
Montserrat Black for headings, Inter for body.
Client can adjust colors + fonts via SiteSettings global in admin.

## Conventions
- All components are TypeScript React Server Components unless interactivity required
- Use next/image for all images, next/font for typography
- ISR with revalidate = 60 on all pages
- Server Actions for form submissions
- Mobile-first responsive design

## Commands
- Dev: `cd ~/code/genflat-rebuild && npm run dev`
- Build: `cd ~/code/genflat-rebuild && npm run build`
