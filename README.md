# Mom's Sweet Lab — Preview Website

Preview website for **Mom's Sweet Lab** (home bakery in Kyle, TX, run by
Andrea Samson), built as a client preview: the business reviews the site and
tells us what to fix or add, then decides whether to make it theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel (git route, same pattern as the Smiles Dental Care,
  Phoenix Rise and Wendy's Sweet Treats previews)
- **Design:** mobile-first, following the patterns of the top bakery sites
  (photo-led hero, menu cards with prices, one-click order path, story band,
  DM-to-order flow)

## Facts used (verified 2026-11-13)

- Home baker **Andrea Samson**, Kyle, TX; Facebook
  facebook.com/MomsSweetLab, Instagram @momsweetlab; no phone, email, street
  address or website published — DM only.
- An artist first: drawing, painting, coloring → cookie decorating as "tiny,
  edible canvases". First order: Powerpuff Girls-themed cookies. Break: a
  beauty store's client giveaway cookies with total creative freedom.
- Custom cookies are the bestseller; calendar full every single week.
- Verified prices: **custom cookies from $45/dozen**; **custom cupcakes from
  $40/dozen**; **custom cakes from $45 (4-inch)**.
- Growth engine is trust / word-of-mouth, not social media likes.

## Build / QC

- `npm run build` — static export to `out/`
- Playwright QC at `../qc/run-qc.py` (390px + 1440px): single h1, no
  horizontal overflow, DM links to the Facebook page, disclaimer banner,
  reveal animations, order-form validation + success state.

## Images

All photography is from Unsplash (CDN links, verified by downloading and
viewing each photo): chocolate chip cookies (hero), cookies in a basket
(story band), mint cupcakes, chocolate drip cake, raspberry layer cake
(Meet Andrea).
