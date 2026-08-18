import { createFileRoute, Link } from "@tanstack/react-router";
import tripMountains from "@/assets/trip-mountains.jpg";
import tripCoast from "@/assets/trip-coast.jpg";
import tripDesert from "@/assets/trip-desert.jpg";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Expeditions — Curated Road Trips & Long Tours" },
      { name: "description", content: "Curated short getaways and long expeditions across mountains, coastlines, and deserts with NomadCruiser." },
      { property: "og:title", content: "Expeditions — Curated Road Trips & Long Tours" },
      { property: "og:description", content: "Curated short getaways and long expeditions across mountains, coastlines, and deserts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TripsPage,
});

const trips = [
  {
    id: "northern-ridge",
    name: "Northern Ridge Circuit",
    image: tripMountains,
    alt: "Misty mountain pass road with winding turns",
    duration: "7 Days",
    type: "Self-Drive or Chauffeur",
    price: "₹12,500/day",
    description: "Winding Himalayan passes, pine forests, and alpine villages. Ideal for groups seeking cool air and high-altitude adventure.",
    tags: ["Mountains", "High Altitude", "7 Days"],
  },
  {
    id: "southern-coastal",
    name: "Southern Coastal Run",
    image: tripCoast,
    alt: "Coastal highway with palm trees and ocean view",
    duration: "4 Days",
    type: "Coastal Sightseeing",
    price: "₹8,200/day",
    description: "Ocean roads, backwater crossings, and beach towns. A relaxed itinerary packed with seafood stops and golden sunsets.",
    tags: ["Coast", "Beaches", "4 Days"],
  },
  {
    id: "western-desert",
    name: "Western Desert Trail",
    image: tripDesert,
    alt: "Sunset over a desert road with red sand dunes",
    duration: "12 Days",
    type: "Long Distance Caravan",
    price: "₹15,000/day",
    description: "Cross golden dunes, historic forts, and desert towns. Built for groups with a taste for long horizons and starlit camps.",
    tags: ["Desert", "Caravan", "12 Days"],
  },
];

function TripsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-forest text-sand py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-heading mb-6">Curated Expeditions</h1>
          <p className="text-xl text-sand/80 max-w-2xl mx-auto">
            We don't just rent vehicles; we design departures. Pick a route and we'll handle the logistics, permits, and fleet.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="group cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img
                  src={trip.image}
                  alt={trip.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-2 mb-3">
                {trip.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-forest/10 text-forest rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-heading text-forest mb-2">{trip.name}</h3>
              <p className="text-sm text-foreground/60 mb-4">{trip.duration} • {trip.type}</p>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">{trip.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold px-2 py-1 bg-secondary rounded text-foreground">From {trip.price}</span>
                <Link
                  to="/contact"
                  className="text-sm font-bold uppercase tracking-widest text-forest hover:text-safety transition-colors"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center border-t border-border">
        <h2 className="text-5xl font-heading text-forest mb-6">Want a Custom Route?</h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-8">
          Tell us your destination, group size, and dates. We'll draft a bespoke itinerary and recommend the right vehicle.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-safety text-forest px-10 py-4 font-bold uppercase tracking-tighter hover:bg-forest hover:text-white transition-colors"
        >
          Plan a Custom Trip
        </Link>
      </section>
    </div>
  );
}
