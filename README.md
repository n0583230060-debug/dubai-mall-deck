# The Dubai Mall — Interactive Sales Deck

A cinematic, luxury-grade interactive sales deck for **The Dubai Mall** — the world's most visited retail and entertainment destination, adjacent to the Burj Khalifa in Downtown Dubai.

## 🔗 Live Demo
> Deploy to Vercel and add link here

## Tech Stack
- **React 18** — UI framework
- **Framer Motion** — cinematic transitions and animations
- **Anthropic Claude API** — AI-powered luxury sales concierge
- **Vercel** — zero-config deployment

## Features
- Non-linear navigation (dots, arrows, keyboard ← →)
- Cinematic YouTube video hero
- AI concierge chat (Claude-powered)
- 8 fully interactive sections
- Fashion Avenue dedicated luxury wing module
- Visitor source market data visualisation
- Venue capacity grid
- Sponsorship tier cards
- Leasing path segmentation
- Contact / enquiry form

## Project Structure
```
src/
  components/
    Nav.js            # Global navigation bar
    AIChat.js         # Claude-powered sales concierge
  sections/
    Hero.js           # Cinematic video opening
    WhyUs.js          # Scale, demographics, source markets
    FashionAvenue.js  # Luxury wing dedicated module
    Attractions.js    # 6 world-class attractions
    Events.js         # Venues, capacities, highlights
    Sponsorship.js    # 3-tier partnership packages
    Leasing.js        # 4 leasing paths
    Contact.js        # Enquiry form
    AllSections.js    # Shared section components
  data/
    mall.js           # Single source of truth — all property data
  styles.css          # Design system (Playfair Display + Lato, gold/black luxury theme)
  App.js              # Navigation logic and routing
```

## Setup

```bash
npm install
npm start
```

## Deploy to Vercel

```bash
npx vercel
```

No environment variables required — the Anthropic API key is handled by Vercel's proxy.

## Design Decisions

- **Playfair Display + Lato** — editorial luxury pairing; avoids generic sans-serif defaults
- **Deep black (#06060A) + desert gold (#C9A84C)** — evokes Dubai's skyline at night
- **Grain overlay on hero** — cinematic texture, not flat digital
- **Vertical eyebrow label** — borrowed from luxury print editorial
- **Stats ticker bar** — anchors scale data without interrupting the cinematic opening
- **Fashion Avenue as a standalone module** — the luxury wing deserves its own section given its scale and positioning
- **Source market bar chart** — visually communicates global reach to prospective partners
- **AI concierge** — Claude acts as a 24/7 luxury sales representative, always closing toward an action

## AI Tools Used
- **Claude (Anthropic)** — code generation + AI chat concierge feature
- **Midjourney** — supplemental imagery (where applicable)
