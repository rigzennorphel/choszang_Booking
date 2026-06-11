/**
 * =====================================
 * FILE: lib/site.ts
 * PURPOSE: Central config — branding, contact, copy, banner, splash, and asset paths.
 * RELATED: Used across layout, Header, Footer, Hero, About, and marketing components.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Phone & WhatsApp message template
 * 2. site export — name, SEO, contact links
 * 3. wordmark, banner, welcome, about, packages, homePhotoBanner, gallery
 * =====================================
 */

/* =====================================
   CONTACT CONSTANTS
   Single place to update phone and pre-filled WhatsApp text
   ===================================== */
const phoneTel = "+916005162048";
const whatsappMessage = `🙏 Hello!Jullay
Thank you for contacting to Chozang booking Ladakh – .Tsetup

We provide:
🚕 Taxi Service in Ladakh
🏔️ Customized Ladakh Tour Packages
✈️ Airport Pickup & Drop
🏕️ Trips to Pangong, Nubra, Turtuk & Tso Moriri

Please share the following details so we can plan your trip:
1️⃣ Travel dates
2️⃣ Number of people
3️⃣ Package / Taxi requirement
4️⃣ Hotel required or not

We will reply shortly with the best itinerary and price.

Thank you`;

/**
 * site — read-only object consumed by pages and components.
 * Edit here instead of scattering strings through the UI.
 */
export const site = {
  /** Legal / marketing name shown in titles and footer */
  name: "Chozang Booking",
  /** package.json / repo style slug */
  slug: "ladakhbooking",
  /** Shorter name for tight layouts (optional) */
  nameShort: "Ladakh Booking",
  description:
    "Book trusted taxis across Ladakh — Leh Kushok Bakula Rimpochee airport transfers, Leh town rides, Pangong, Nubra, Tso Moriri, Kargil, and multi‑day sightseeing with local drivers.",
  email: "tsetupdorjay123@gmail.com",
  phoneDisplay: "+91 60051 62048",
  phoneTel,
  /** WhatsApp deep link with encoded booking inquiry message */
  whatsappHref: `https://wa.me/${phoneTel.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`,
  copyrightNote: "Ladakh Booking. Local drivers, fixed routes, and clear fares.",
  /** Short blurb under the logo in the footer */
  footerTagline:
    "Trusted taxis across Ladakh — Leh airport pickups, sightseeing, and long-distance transfers with clear pricing.",
  /** Header / footer logo: {before}{highlight}{after} with highlight in accent color */
  wordmark: {
    before: "Chozang Ladakh ",
    highlight: "Booking",
    after: "",
  },
  /** Brand logo image — header, favicon source, etc. */
  logoSrc: "/logo.png",
  /** Thin top banner — set enabled: false to hide */
  banner: {
    enabled: true,
    message: "Season open — Leh airport, Nubra & Pangong trips etc.",
    ctaLabel: "Call now",
  },
  /** Short splash on first visit — duration in ms */
  welcome: {
    title: "Welcome to Chozang Booking",
    quote:
      "Travel is not just about reaching a place; it's about enjoying the journey.",
    durationMs: 1500,
  },
  /** About page copy — paragraphs, highlights, closing, and quote */
  about: {
    paragraphs: [
      "Ju-ley Hi, Welcome to our online taxi booking service in Ladakh. We are committed to providing safe, comfortable, reliable, Great Customer Experience and affordable transportation for every journey.",
      "This platform is with 5+ years of professional driving and customer service experience. Over the years, we have earned the trust of our customers through punctuality, professionalism, and a strong focus on passenger safety.",
      "Your safety is our highest priority. Our vehicle is regularly maintained and inspected to ensure a secure and comfortable travel experience. We follow safe driving practices and strive to provide every passenger with peace of mind throughout their journey.",
      "We make your travel planning easy with a simple online booking system. From local rides and airport transfers to sightseeing tours and long-distance trips, we are committed to providing a safe, comfortable, and enjoyable journey every time.",
    ],
    highlights:
      "5+ Years of Experience • Safety First • Reliable Service • Customer Satisfaction",
    closing:
      "Thank you for choosing our service. We look forward to making every journey safe, comfortable, and memorable.",
    quote:
      "Great journeys start with trust and end with beautiful memories.",
  },
  /** Quote shown at the bottom of the home page */
  homeClosingQuote:
    "Take Nothing but Memories, Leave Nothing but Footprints, Keep Ladakh Clean.",
  /** Tour packages page — edit titles, durations, and highlights here */
  packages: {
    label: "Packages",
    title: "Ladakh tour packages",
    description:
      "Fixed-route trips with local drivers — airport transfers, lake runs, Nubra circuits, and multi-day itineraries. Share your dates on WhatsApp for a custom quote.",
    featuredItinerary: {
      title: "3 Nights / 4 Days Itinerary",
      subtitle: "Leh acclimatisation → Nubra Valley → Pangong Lake → return",
      name: "3 Nights / 4 Days — Leh, Nubra & Pangong",
      days: [
        {
          day: 1,
          title: "Arrival & rest in Leh",
          detail: "Pick up from Leh Airport & rest at Leh hotel.",
        },
        {
          day: 2,
          title: "Leh local sightseeing",
          detail:
            "Sangam, Pathar Sahib Gurudwara, Magnetic Hill, Hall of Fame, Shanti Stupa & Leh Market.",
        },
        {
          day: 3,
          title: "Leh to Nubra Valley",
          detail: "Leh to Nubra Valley (Hunder) via Khardung La Pass.",
        },
        {
          day: 4,
          title: "Nubra to Pangong Lake",
          detail: "Nubra Valley to Pangong Lake via Shyok route.",
        },
        {
          day: 5,
          title: "Pangong to Leh & departure",
          detail: "Pangong Lake to Leh & airport drop / hotel drop.",
        },
      ],
    },
    items: [
      {
        name: "Leh Airport Transfer",
        tag: "Airport",
        duration: "Same day",
        description: "Pickup or drop at Kushok Bakula Rimpochee Airport — Leh town or your hotel.",
        highlights: ["Flight tracking on request", "SUV or van options", "Fixed fare before you pay"],
      },
      {
        name: "Pangong Lake Day Trip",
        tag: "Day trip",
        duration: "1 day",
        description: "Leh → Chang La → Pangong Lake → return. Ideal for a long lake day with photo stops.",
        highlights: ["Chang La pass", "Pangong lakeside time", "Packed snacks on request"],
      },
      {
        name: "Nubra Valley Circuit",
        tag: "Popular",
        duration: "2 nights / 3 days",
        description: "Leh → Khardung La → Nubra → Diskit → Hunder sand dunes → return via same or alternate route.",
        highlights: ["Khardung La Top", "Diskit Monastery", "Camel ride at Hunder"],
      },
      {
        name: "Pangong Overnight",
        tag: "Lake stay",
        duration: "1 night / 2 days",
        description: "Leh to Pangong with an overnight stay near the lake — sunrise and sunset views.",
        highlights: ["Chang La crossing", "Lakeside camps or guesthouse", "Stargazing weather permitting"],
      },
      {
        name: "Tso Moriri Expedition",
        tag: "High altitude",
        duration: "2 nights / 3 days",
        description: "Leh → Chumathang → Tso Moriri → Karzok village. Remote Changthang plateau experience.",
        highlights: ["Karzok Monastery", "Wildlife spotting", "Permit assistance guidance"],
      },
      {
        name: "Classic Ladakh — Leh, Nubra & Pangong",
        tag: "Best seller",
        duration: "4 nights / 5 days",
        description: "The complete circuit: Leh acclimatisation, Nubra Valley, and Pangong Lake with a local driver throughout.",
        highlights: ["Leh local sights", "Nubra & Pangong", "One dedicated vehicle & driver"],
      },
    ],
  },
  /** Home hero banner — video with image poster fallback */
  homePhotoBanner: {
    videoSrc: "/video_banner.mp4",
    //imageSrc: "/home-banner.jpg",
    alt: "Panoramic view of Ladakh — mountains and high-altitude roads",
  },
  /**
   * Home gallery — add photos to public/gallery/, then append entries here.
   * Each card: title, location, and images[] (one or many photos per card).
   */
  gallery: {
    label: "Gallery",
    title: "Scenes from Ladakh",
    description:
      "Snapshots from Pangong, Nubra, Leh, and mountain passes — the routes our drivers know best.",
    photos: [
      {
        title: "Monastery visit",
        location: "Ladakh",
        images: [
          {
            src: "/gallery/monastery/02.png",
            alt: "Hanle Monastery perched on a hill with mountains and water in the foreground",
            caption: "Hanle Monastery",
          },
          {
            src: "/gallery/monastery/04.png",
            alt: "Stakna Monastery on a hilltop beside a river and green valley",
            caption: "Stakna Monastery",
          },
          {
            src: "/gallery/monastery/05.png",
            alt: "Korzok Monastery with ornate balcony and colorful prayer flags",
            caption: "Korzok Monastery",
          },
          {
            src: "/gallery/monastery/06.png",
            alt: "Thiksey Monastery complex on a hillside with red and yellow buildings",
            caption: "Thiksey Monastery",
          },
          {
            src: "/gallery/monastery/07.png",
            alt: "Matho Monastery with white and blue facade on a rocky slope",
            caption: "Matho Monastery",
          },
          {
            src: "/gallery/monastery/08.png",
            alt: "Rizong Monastery with white stupa and prayer flags on a mountainside",
            caption: "Rizong Monastery",
          },
          {
            src: "/gallery/monastery/09.png",
            alt: "Likir Monastery with golden Buddha statue on a terraced hillside",
            caption: "Likir Monastery",
          },
          {
            src: "/gallery/monastery/10.png",
            alt: "Sharchukhul Monastery with golden roofs at the base of a mountain",
            caption: "Sharchukhul Monastery",
          },
          {
            src: "/gallery/monastery/13.png",
            alt: "Hemis Monastery complex with hillside dwellings and green trees",
            caption: "Hemis Monastery",
          },
          {
            src: "/gallery/monastery/14.png",
            alt: "Lamayuru Monastery terraced on a hillside with village and stupa",
            caption: "Lamayuru Monastery",
          },
          {
            src: "/gallery/monastery/15.png",
            alt: "Phyang Monastery with red and white buildings under a blue sky",
            caption: "Phyang Monastery",
          },
          {
            src: "/gallery/monastery/16.png",
            alt: "Chemday Monastery on a hillside with golden fields and green trees",
            caption: "Chemday Monastery",
          },
          {
            src: "/gallery/monastery/17.png",
            alt: "Samstanling Monastery with golden roof and red stairs against a rocky mountain",
            caption: "Samstanling Monastery",
          },
          {
            src: "/gallery/monastery/18.png",
            alt: "Spituk Monastery overlooking a green valley and snow-capped mountains",
            caption: "Spituk Monastery",
          },
          {
            src: "/gallery/monastery/19.png",
            alt: "Diskit Monastery tiered on a steep mountainside with green trees below",
            caption: "Diskit Monastery",
          },
          {
            src: "/gallery/monastery/20.png",
            alt: "Alchi Monastery with white stupas, yellow wildflowers, and barren mountains",
            caption: "Alchi Monastery",
          },
        ],
      },
      {
        title: "Pangong Lake",
        location: "Changthang",
        images: [
          {
            src: "/gallery/pangong-lake/01.png",
            alt: "Wide panoramic view of Pangong Lake with blue water, mountains, and cloudy sky",
          },
          {
            src: "/gallery/pangong-lake/02.png",
            alt: "Ruddy shelduck taking flight over the calm waters of Pangong Lake",
          },
          {
            src: "/gallery/pangong-lake/03.png",
            alt: "Serene Pangong Lake with barren brown mountains and white clouds",
          },
          {
            src: "/gallery/pangong-lake/04.png",
            alt: "Deep blue Pangong Lake surrounded by rugged mountains under a clear sky",
          },
          {
            src: "/gallery/pangong-lake/05.png",
            alt: "Vibrant blue Pangong Lake reflecting mountains and a bright sky",
          },
        ],
      },
      {
        title: "Nubra Valley",
        location: "Nubra",
        images: [
          {
            src: "/gallery/nubra-valley/01.png",
            alt: "Camel safari across sand dunes with snow-capped mountains in Nubra Valley",
          },
          {
            src: "/gallery/nubra-valley/02.png",
            alt: "Green Nubra Valley with monastery, stupas, and barren mountains",
          },
          {
            src: "/gallery/nubra-valley/03.png",
            alt: "Camel caravan silhouetted against towering Nubra Valley mountains",
          },
          {
            src: "/gallery/nubra-valley/04.png",
            alt: "White-walled Diskit Monastery built into a rocky mountainside",
          },
          {
            src: "/gallery/nubra-valley/05.png",
            alt: "Colorful Maitreya Buddha statue at Diskit Monastery, Nubra Valley",
          },
          {
            src: "/gallery/nubra-valley/06.png",
            alt: "Khardung La Top sign at 18,380 feet with prayer flags on the Leh–Nubra route",
          },
        ],
      },
      {
        title: "Leh town",
        location: "Leh",
        images: [
          {
            src: "/gallery/leh-town/01.png",
            alt: "Panoramic view of Leh town with green trees and snow-capped mountains",
          },
          {
            src: "/gallery/leh-town/02.png",
            alt: "Leh Palace built into a rocky hillside with a white stupa below",
          },
          {
            src: "/gallery/leh-town/03.png",
            alt: "White monastery on a mountainside framed by a golden temple roof in Leh",
          },
          {
            src: "/gallery/leh-town/04.png",
            alt: "Busy Leh market street with shops, prayer flags, and pedestrians",
          },
        ],
      },
      {
        title: "Tso Moriri",
        location: "Changthang",
        images: [
          {
            src: "/gallery/tso-moriri/01.png",
            alt: "Tso Moriri lake with green meadow, blue water, and snow-capped mountains",
          },
          {
            src: "/gallery/tso-moriri/02.png",
            alt: "Kiang wild asses on the high-altitude Changthang plateau near Tso Moriri",
          },
          {
            src: "/gallery/tso-moriri/03.png",
            alt: "Karzok village overlooking the deep blue waters of Tso Moriri",
          },
          {
            src: "/gallery/tso-moriri/04.png",
            alt: "Panoramic view of Tso Moriri with marshy foreground and barren mountains",
          },
        ],
      },
     
    ],
  },
} as const;
