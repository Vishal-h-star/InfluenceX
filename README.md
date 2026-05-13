# InfluenceX

A Next.js 14 (App Router) marketing site for an influencer marketing agency. Includes a MongoDB-backed contact form, Tailwind styling, and a violet brand system.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- MongoDB + Mongoose

## Getting started

```bash
npm install
# Set MONGODB_URI in .env.local
npm run dev
```

Open http://localhost:3000.

## Environment

Edit `.env.local`:

```
MONGODB_URI=mongodb+srv://USER:PASS@cluster/influencex?retryWrites=true&w=majority
```

The app boots and renders without the URI, but POSTs to `/api/contact` will return an error until it is set.

## Project structure

```
app/
  layout.js              Root layout + SEO metadata
  page.js                Home (hero, stats, why-us, CTA)
  services/page.js       Services
  influencers/page.js    Creator grid + category filter
  about/page.js          Team + story
  contact/
    page.js              Contact page shell
    ContactForm.jsx      Client form, posts to /api/contact
  api/contact/route.js   POST handler, writes Inquiry to MongoDB
components/
  Navbar.jsx, Footer.jsx, Section.jsx
lib/dbConnect.js         Mongoose connection (cached)
models/Inquiry.js        Mongoose Inquiry schema
```
