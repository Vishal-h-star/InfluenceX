# InfluenceX

A Next.js 14 (App Router) marketing site for an influencer marketing agency. Includes a MongoDB-backed contact form, Tailwind styling, and a violet brand system.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVishal-h-star%2FInfluenceX&env=MONGODB_URI&envDescription=MongoDB%20connection%20string%20used%20by%20the%20contact%20form%20API%20route&envLink=https%3A%2F%2Fwww.mongodb.com%2Fatlas&project-name=influencex&repository-name=influencex)

Click the button, sign in to Vercel, then paste your `MONGODB_URI` when prompted. Vercel will provision the project, build it, and give you a live URL.

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
