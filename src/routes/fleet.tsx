import { createFileRoute } from "@tanstack/react-router";
import fleetCruiser from "@/assets/fleet-cruiser.jpg";
import fleetTraveler from "@/assets/fleet-traveler.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Force Cruiser & Travel Vehicle Rentals" },
      { name: "description", content: "Explore the NomadCruiser fleet: Force Cruiser, luxury travelers, SUVs, and coaches for every group size and terrain." },
      { property: "og:title", content: "Our Fleet — Force Cruiser & Travel Vehicle Rentals" },
      { property: "og:description", content: "Explore the NomadCruiser fleet for every group size and terrain." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FleetPage,
});

const vehicles = [
  {
    id: "force-cruiser-classic",
    name: "Force Cruiser Classic",
    image: fleetCruiser,
    alt: "Modified Force Cruiser with off-road tires and roof rack",
    specs: ["17 Seats", "4x4 Capability", "AC Standard", "Roof Rack"],
    description: "The ultimate workhorse for large family reunions or corporate retreats. Designed for the most rugged terrains without compromising on passenger legroom.",
    price: "₹8,500/day",
  },
  {
    id: "urban-nomad-traveler",
    name: "Urban Nomad Traveler",
    image: fleetTraveler,
    alt: "Luxury 9-seater traveler coach interior with leather seats",
    specs: ["9-12 Seats", "Luxury Upholstery", "WiFi Enabled", "Recliners"],
    description: "Optimized for comfort during long interstate highway drives. Features individual recliners, ambient lighting, and advanced suspension for a smooth executive feel.",
    price: "₹12,000/day",
  },
  {
    id: "highland-4x4",
    name: "Highland 4x4 SUV",
    image: fleetCruiser,
    alt: "Black 4x4 SUV on a rocky trail",
    specs: ["5-7 Seats", "All-Terrain Tires", "Snorkel", "Winch"],
    description: "A compact go-anywhere option for scouting routes, film crews, or small groups chasing remote destinations off the beaten path.",
    price: "₹5,500/day",
  },
  {
    id: "executive-coach",
    name: "Executive Coach",
    image: fleetTraveler,
    alt: "Modern executive coach with tinted glass",
    specs: ["25-35 Seats", "Air Suspension", "Restroom", "PA System"],
    description: "For large-scale corporate events, school excursions, and wedding transfers that demand scale without sacrificing comfort.",
    price: "₹18,000/day",
  },
];

function FleetPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-forest text-sand py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-heading mb-6">The Fleet</h1>
          <p className="text-xl text-sand/80 max-w-2xl mx-auto">
            Every vehicle is serviced, sanitized, and expedition-ready before each departure. Choose by capacity, terrain, and comfort level.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-card rounded-sm overflow-hidden border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-heading text-forest">{vehicle.name}</h3>
                  <span className="text-safety font-bold text-lg">{vehicle.price}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm font-medium uppercase tracking-tighter text-foreground/70">
                  {vehicle.specs.map((spec, i) => (
                    <span key={i}>{spec}</span>
                  ))}
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
