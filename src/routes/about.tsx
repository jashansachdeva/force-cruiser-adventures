import { createFileRoute, Link } from "@tanstack/react-router";
import heroCruiser from "@/assets/hero-cruiser.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NomadCruiser Travel Solutions" },
      { name: "description", content: "NomadCruiser has been arranging premium Force Cruiser and travel vehicle rentals across India since 2012." },
      { property: "og:title", content: "About Us — NomadCruiser Travel Solutions" },
      { property: "og:description", content: "Premium Force Cruiser and travel vehicle rentals across India since 2012." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "12+", label: "Years on the Road" },
  { value: "3,500+", label: "Trips Completed" },
  { value: "45+", label: "Vehicles in Fleet" },
  { value: "28", label: "States Covered" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-forest text-sand py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-heading mb-6">Our Story</h1>
          <p className="text-xl text-sand/80 max-w-2xl mx-auto">
            Built by travelers who believe the vehicle is part of the experience.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-heading text-forest mb-6">From One Cruiser to a Convoy</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                NomadCruiser started in 2012 with a single Force Cruiser and a simple idea: group travel in India deserved better than cramped buses and unreliable rentals.
              </p>
              <p>
                Today, we operate a fleet of Force Cruisers, luxury travelers, 4x4 SUVs, and executive coaches across 28 states. Every vehicle is maintained in-house, every driver is terrain-trained, and every itinerary is reviewed by people who have actually driven the route.
              </p>
              <p>
                We specialize in long expeditions, short getaways, and custom charters for families, corporate teams, film crews, and wedding caravans. Whether you are climbing Himalayan passes or cruising coastal highways, we make sure the road itself is part of the memory.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroCruiser}
              alt="White Force Cruiser on a mountain road"
              width={800}
              height={600}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest text-sand py-24">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-sand/20 pt-8">
                <div className="text-5xl font-heading text-safety mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-sand/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-heading text-forest mb-8">Why Travel With Us?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-2xl font-heading text-forest mb-3">Expert Route Planning</h3>
            <p className="text-foreground/70">We avoid generic itineraries. Every route is chosen for road quality, scenery, and the best stops along the way.</p>
          </div>
          <div>
            <h3 className="text-2xl font-heading text-forest mb-3">Fleet You Can Trust</h3>
            <p className="text-foreground/70">All vehicles are serviced before every trip and carry permits, first-aid kits, and emergency support.</p>
          </div>
          <div>
            <h3 className="text-2xl font-heading text-forest mb-3">Transparent Pricing</h3>
            <p className="text-foreground/70">No hidden fuel charges or last-minute add-ons. Your quote includes vehicle, driver, and tolls up front.</p>
          </div>
        </div>
        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-forest text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-safety transition-colors"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}
