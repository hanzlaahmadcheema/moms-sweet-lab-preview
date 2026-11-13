/**
 * Mom's Sweet Lab — site content.
 *
 * VERIFIED = from Andrea Samson's Voyage Austin interview (Oct 2025) and the
 * business's public Facebook/Instagram profiles (checked 2026-11-13).
 * UNIVERSAL = standard content every home-bakery website has, added at the
 * owner's request. The disclaimer banner on the site tells the business owner
 * to correct anything that is wrong.
 */

export const clinic = {
  name: "Mom's Sweet Lab",
  shortName: "Mom's Sweet Lab",
  tagline: "Home baker · Kyle, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "Kyle, Texas",
  area: "Kyle, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mom%27s+Sweet+Lab+Kyle+TX",
  facebookText: "Mom's Sweet Lab — find us on Facebook",
  facebookUrl: "https://www.facebook.com/MomsSweetLab",
  instagramText: "@momsweetlab on Instagram",
  instagramUrl: "https://www.instagram.com/momsweetlab",
  owner: {
    name: "Andrea Samson",
    title: "Home baker & cookie artist",
    bio: "Andrea is a home baker in Kyle, Texas — and an artist first. She spent years drawing, painting and coloring before she discovered cookie decorating, and realized she could use those skills on a tiny, edible canvas. She only baked for her kids until an ad for decorating cookies sparked a new direction — and her first order, Powerpuff Girls-themed cookies, showed her the way. Today her calendar is full every single week.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top bakery sites group it.
 *  VERIFIED groups are marked; prices are the ones Andrea published. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Cookies",
    blurb:
      "The bestseller. Each cookie is a miniature, hand-drawn canvas — decorated by hand with precision and care, in any theme you can imagine.",
    items: ["Hand-decorated with royal icing", "Any theme or occasion", "Each cookie a tiny edible canvas"],
    price: "From $45 / dozen",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate chip cookies in a basket lined with parchment paper",
    verified: true,
  },
  {
    title: "Custom Cupcakes",
    blurb:
      "Baked to order in any flavor or theme — the sweet little sister to the custom cookie.",
    items: ["Baked to order", "Any flavor or theme", "Singles or by the dozen"],
    price: "From $40 / dozen",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Row of cupcakes with mint frosting and rainbow sprinkles",
    verified: true,
  },
  {
    title: "Custom Cakes",
    blurb:
      "Made for your occasion — birthdays, weddings, baby showers, or just because. Tell Andrea the theme and she will bake it.",
    items: ["Birthdays & celebrations", "Weddings", "Any occasion, big or small"],
    price: "From $45 (4-inch)",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate layer cake with drip frosting and piped swirls on a cake stand",
    verified: true,
  },
  {
    title: "Party Favors & Giveaways",
    blurb:
      "Custom cookies for client gifts, party favors and events — the break that built the business, when a beauty store gave Andrea total creative freedom for their client giveaways.",
    items: ["Client giveaway cookies", "Party favors", "Event cookies"],
    price: "DM for a quote",
    verified: true,
  },
];

/** UNIVERSAL — standard on every home-bakery site; DM to confirm. */
export const faqs = [
  {
    q: "How do I order?",
    a: "Send us a DM on Facebook — that is how every order starts. Tell us what you want, when you need it, and how many, and Andrea will confirm your order and the price.",
  },
  {
    q: "How far ahead should I order?",
    a: "Message us as early as you can — Andrea's calendar fills up every single week, so the earlier you book, the better. Custom cookies take time: each one is decorated by hand.",
  },
  {
    q: "Where do I pick up my order?",
    a: "Pickup is in Kyle, Texas. The exact pickup time and details are arranged by DM when you order.",
  },
  {
    q: "Do you deliver?",
    a: "Ask when you order. Delivery depends on the day and the size of the order — DM us and we will tell you what is possible.",
  },
  {
    q: "What about allergies?",
    a: "Tell us about any allergies when you order, and we will tell you honestly what we can and cannot make safely. Everything is baked in a home kitchen.",
  },
  {
    q: "Can I get cookies for a wedding or a business event?",
    a: "Yes — custom cookies are made for birthdays, weddings, baby showers and any celebration, and for client gifts and giveaways too. Send us a DM with the date and how many, and we will plan it with you.",
  },
];

/** UNIVERSAL — the standard home-bakery ordering flow. */
export const orderSteps = [
  {
    title: "DM us on Facebook",
    body: "Tell us what you want, when you need it, and how many. A photo of the design you have in mind helps a lot.",
  },
  {
    title: "We confirm & price it",
    body: "Andrea confirms your order, the price, and the pickup time — before anything is baked.",
  },
  {
    title: "Pick up in Kyle",
    body: "Your sweets are baked and decorated fresh, and ready at the agreed time. Pickup is in Kyle, Texas.",
  },
];
