export const mall = {
  name: "The Dubai Mall",
  tagline: "The World. Under One Roof.",
  location: "Downtown Dubai, United Arab Emirates",
  distanceFromBurjKhalifa: "Connected directly to Burj Khalifa",
  squareFeet: "5,400,000",
  squareFeetNumber: 5400000,
  openedYear: 2008,
  owner: "Emaar Properties",

  heroVideo: "https://www.youtube.com/embed/3JtGFMHgvAo?autoplay=1&mute=1&loop=1&playlist=3JtGFMHgvAo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1",

  stats: [
    { value: 105, suffix: "M+", label: "Annual Visitors" },
    { value: 1300, suffix: "+", label: "Retail Outlets" },
    { value: 5.4, suffix: "M", label: "Square Feet" },
    { value: 200, suffix: "+", label: "F&B Outlets" },
  ],

  highlights: [
    {
      id: "aquarium",
      title: "Dubai Aquarium & Underwater Zoo",
      subtitle: "World's Largest Indoor Aquarium",
      description: "A 10-million-litre tank holding 33,000 aquatic animals, including the world's largest collection of Sand Tiger Sharks. Visible from three levels of the mall.",
      color: "#006B8F",
      icon: "🦈",
    },
    {
      id: "fountain",
      title: "The Dubai Fountain",
      subtitle: "World's Largest Choreographed Fountain",
      description: "Set on a 30-acre Burj Lake, shooting water 150 metres into the air. Performs every 30 minutes at night — a spectacle witnessed by millions each year.",
      color: "#1A7BC4",
      icon: "⛲",
    },
    {
      id: "icerink",
      title: "Dubai Ice Rink",
      subtitle: "Olympic-Sized Ice Rink",
      description: "A full Olympic-sized ice rink open year-round, hosting skating shows, hockey events, and private corporate bookings.",
      color: "#4DB8D4",
      icon: "⛸️",
    },
    {
      id: "vr",
      title: "VR Park",
      subtitle: "Largest VR Theme Park in the Region",
      description: "30+ virtual reality experiences across 75,000 sq ft, from thrilling simulators to immersive brand activations.",
      color: "#7B2FBE",
      icon: "🥽",
    },
    {
      id: "kidzania",
      title: "KidZania Dubai",
      subtitle: "Award-Winning Edutainment City",
      description: "An 80,000 sq ft interactive city where children learn through role-play, attracting families from across the GCC and beyond.",
      color: "#E8A020",
      icon: "🏙️",
    },
    {
      id: "cinema",
      title: "Reel Cinemas",
      subtitle: "16-Screen Premium Cinema",
      description: "A flagship entertainment venue with IMAX, 4DX, and private screening rooms — a premier destination for brand events and premieres.",
      color: "#C0392B",
      icon: "🎬",
    },
  ],

  retail: {
    totalBrands: 1300,
    luxuryBrands: ["Chanel", "Louis Vuitton", "Dior", "Cartier", "Rolex", "Hermès", "Gucci", "Prada", "Tiffany & Co.", "Bulgari"],
    luxuryWing: "Fashion Avenue — The Middle East's Largest Luxury Mall-Within-a-Mall",
    categories: [
      { name: "Luxury & Haute Couture", count: 200, color: "#8B5CF6" },
      { name: "Fashion & Apparel", count: 350, color: "#555" },
      { name: "Dining & F&B", count: 200, color: "#C0392B" },
      { name: "Entertainment & Leisure", count: 120, color: "#7B2FBE" },
      { name: "Health, Beauty & Wellness", count: 180, color: "#D4827A" },
      { name: "Electronics & Flagship Concepts", count: 80, color: "#1A7BC4" },
    ],
  },

  events: {
    capacity: "105,000+ per event day",
    venues: [
      {
        name: "Grand Atrium",
        capacity: "15,000+",
        type: "fashion shows, brand launches, live performances",
      },
      {
        name: "Dubai Ice Rink Arena",
        capacity: "3,000",
        type: "sporting events, concerts, corporate shows",
      },
      {
        name: "Fountain Views Terrace",
        capacity: "5,000+",
        type: "outdoor activations, gala dinners, brand experiences",
      },
      {
        name: "Fashion Avenue Boulevard",
        capacity: "8,000+",
        type: "runway shows, pop-up installations, media events",
      },
      {
        name: "The Dubai Mall Outdoor",
        capacity: "50,000+",
        type: "mega concerts, festivals, national day events",
      },
    ],
    pastHighlights: [
      "Global fashion week satellite shows (Dior, Valentino)",
      "FIFA World Cup fan zones and activations",
      "New Year's Eve — largest public gathering in the world",
      "Apple, Samsung & Tesla product launches",
      "Global music performances and arena-scale concerts",
      "Formula 1 driver appearances and pit stop activations",
    ],
  },

  demographics: {
    catchmentRadius: "2 billion people within 4 hours by flight",
    annualVisitors: "105 million+",
    internationalVisitors: "70%",
    medianSpend: "AED 850+ per visit",
    primaryAge: "18–45",
    topSourceMarkets: ["UAE", "Saudi Arabia", "India", "UK", "USA", "Russia", "China"],
  },

  leasing: [
    {
      type: "Fashion Avenue Flagship",
      description: "The most coveted address in luxury retail. Fashion Avenue is the Middle East's pre-eminent luxury destination — home to the world's top maisons.",
      cta: "Inquire About Fashion Avenue",
      color: "#8B5CF6",
      icon: "👑",
    },
    {
      type: "Retail & Flagship Store",
      description: "105M+ annual visitors and a catchment of 2 billion people within 4 hours by air. No retail address on Earth offers this reach.",
      cta: "Explore Retail Space",
      color: "#333",
      icon: "🏪",
    },
    {
      type: "Food & Beverage",
      description: "From Michelin-starred concepts to global QSR flagships — join a dining ecosystem that keeps guests for hours, not minutes.",
      cta: "View F&B Opportunities",
      color: "#C0392B",
      icon: "🍽️",
    },
    {
      type: "Pop-Up & Brand Activation",
      description: "High-impact, short-term activations in the highest-footfall retail environment on the planet. Launch a product. Make a statement.",
      cta: "Book an Activation",
      color: "#7B2FBE",
      icon: "⚡",
    },
  ],

  sponsorship: {
    tiers: [
      {
        name: "Title Partner",
        reach: "105M+ impressions/year",
        features: [
          "Naming rights to a landmark venue or zone",
          "Exclusive category sponsorship rights",
          "Year-round physical activation space",
          "Integrated digital & OOH media package",
          "VIP access to all major events",
          "Co-branded content with Emaar Media",
        ],
      },
      {
        name: "Premier Sponsor",
        reach: "50M+ impressions/year",
        features: [
          "Dedicated activation zone (1,000+ sq ft)",
          "Event co-branding rights",
          "Digital display network presence",
          "Seasonal campaign integration",
          "VIP event access and hospitality",
        ],
      },
      {
        name: "Brand Activation",
        reach: "10M+ impressions/activation",
        features: [
          "Pop-up brand experience space",
          "Social & influencer amplification",
          "On-site brand experience design",
          "Post-activation analytics report",
        ],
      },
    ],
  },

  fashionAvenue: {
    title: "Fashion Avenue",
    subtitle: "The Middle East's Largest Luxury Mall-Within-a-Mall",
    description: "A dedicated 2.4 million sq ft luxury wing that is itself larger than most malls in the world. Fashion Avenue is where the world's greatest luxury maisons choose to plant their flag in the Middle East.",
    brands: ["Chanel", "Louis Vuitton", "Dior", "Cartier", "Rolex", "Hermès", "Gucci", "Prada", "Bulgari", "Van Cleef & Arpels", "Tiffany & Co.", "Valentino", "Bottega Veneta", "Balenciaga", "Fendi"],
    squareFeet: "2.4M",
  },
};
