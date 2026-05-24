# The Dubai Mall — Interactive Sales Deck

> A cinematic, browser-based sales experience for the world's most visited destination.

 **Live Demo:** [dubai-mall-deck-eight.vercel.app](https://dubai-mall-deck-eight.vercel.app)

---

## About This Project

This is an interactive sales deck built for **The Dubai Mall** — the world's most visited retail and entertainment destination, located in Downtown Dubai adjacent to the Burj Khalifa.

The tool replaces the traditional sales process (PDFs, YouTube links, spreadsheets) with a single, self-contained experience that a sales rep can screen-share on a live call — or send as a standalone link that a prospect can explore on their own.

**Primary audiences:**
- Retail tenants (luxury flagships, fashion brands, F&B concepts, pop-ups)
- Brand sponsors and partnership teams
- Event producers and venue bookers

---

## Features

- Cinematic full-screen video hero
- Non-linear navigation — the viewer controls their journey
- AI-powered sales concierge (Claude API) — answers questions and guides toward action
- Dedicated Fashion Avenue luxury wing module
- Visitor source market data visualisation
- Sponsorship tier cards
- Leasing path segmentation
- Venue capacity grid with event highlights
- Contact / enquiry form
- Fully responsive — desktop and tablet

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Animations | Framer Motion |
| Styling | CSS Variables + Custom Design System |
| AI Concierge | Anthropic Claude API |
| Deployment | Vercel |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/n0583230060-debug/dubai-mall-deck.git

# Navigate into the project
cd dubai-mall-deck

# Install dependencies
npm install

# Run locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── Nav.js              # Global navigation
│   └── AIChat.js           # Claude-powered sales concierge
├── sections/
│   ├── Hero.js             # Cinematic video opening
│   ├── WhyUs.js            # Scale, demographics, source markets
│   ├── FashionAvenue.js    # Luxury wing dedicated module
│   ├── Attractions.js      # World-class attractions
│   ├── Events.js           # Venues, capacities, highlights
│   ├── Sponsorship.js      # Partnership tiers
│   ├── Leasing.js          # Leasing paths by category
│   └── Contact.js          # Enquiry form
├── data/
│   └── mall.js             # Single source of truth — all property data
├── styles.css              # Design system
└── App.js                  # Navigation logic
```

---

## Design Decisions

**Dark luxury theme** — deep black with clean white typography. No gold, no clutter. The property speaks for itself.

**Video-first hero** — the opening frame is a full-screen cinematic video. The viewer feels the scale before they read a single word.

**Non-linear navigation** — prospects are not forced through a linear slideshow. They control their journey, which increases engagement and time on screen.

**Single data file** — all property content lives in `data/mall.js`. Updating figures, brands, or copy requires changing one file only.

**Fashion Avenue as a standalone section** — at 2.4 million sq ft, the luxury wing is larger than most standalone malls. It deserves its own dedicated section.

**AI concierge** — Claude acts as a 24/7 sales representative. Every response is designed to guide the prospect toward one of three actions: leasing, sponsorship, or event booking.

---

## AI Tools Used

| Tool | How It Was Used |
|------|----------------|
| **Claude (Anthropic)** | Code generation, architecture planning, AI chat concierge |
| **Framer Motion** | Animation design and interaction patterns |

---

## Deployment

Deployed on **Vercel** with zero configuration.

```bash
npx vercel --prod
```

---

## What I Would Improve With More Time

- Add entrance screen with audience selector (Tenant / Sponsor / Event Partner) — each path shows a tailored version of the deck
- Integrate real Dubai Mall API data for live visitor statistics
- Add scroll-triggered video sections for each attraction
- Build out a dedicated mobile experience
- Add analytics to track which sections prospects spend the most time on

---

*Built as part of an interview project. All content sourced from publicly available Dubai Mall and Emaar Properties materials.*
