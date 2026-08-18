import { createFileRoute, Link } from "@tanstack/react-router";
import heroCruiser from "@/assets/hero-cruiser.jpg";
import fleetCruiser from "@/assets/fleet-cruiser.jpg";
import fleetTraveler from "@/assets/fleet-traveler.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NomadCruiser — Force Cruiser & Travel Rentals" },
      { name: "description", content: "Premium Force Cruiser and travel vehicle rentals for short getaways and long expeditions across India." },
      { property: "og:title", content: "NomadCruiser — Force Cruiser & Travel Rentals" },
      { property: "og:description", content: "Premium Force Cruiser and travel vehicle rentals for short getaways and long expeditions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[80vh] relative">
          <img
            src={heroCruiser}
            alt="White Force Cruiser on a winding mountain road at sunset"
            width={1920}
            height={900}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent flex flex-col justify-end p-8 md:p-20">
          <h1 className="text-6xl md:text-9xl font-heading leading-none text-white max-w-4xl">
            Go Where The <span className="text-safety">Road Ends</span>
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-xl font-light">
            Specializing in high-capacity Force Cruiser expeditions for group travel. Whether it's a weekend getaway or a trans-continental journey, we lead the way.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-safety text-forest px-8 py-3 font-bold uppercase tracking-tighter hover:bg-white transition-colors"
            >
              Book Your Trip
            </Link>
            <Link
              to="/fleet"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 font-bold uppercase tracking-tighter hover:bg-white hover:text-forest transition-colors"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-heading text-forest">Our Powerhouse Fleet</h2>
            <p className="text-foreground/60 uppercase tracking-widest text-sm mt-2">Built for endurance, styled for comfort</p>
          </div>
          <div className="h-px flex-1 bg-forest/10 mx-12 hidden md:block" />
          <div className="text-right">
            <span className="text-3xl font-heading">01 — 04</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <div className="w-full aspect-[4/3] overflow-hidden mb-6">
              <img
                src={fleetCruiser}
                alt="Modified Force Cruiser with off-road tires and roof rack"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-3xl font-heading text-forest">Force Cruiser Classic</h3>
            <div className="flex gap-4 mt-2 text-sm font-medium uppercase tracking-tighter text-foreground/70">
              <span>17 Seats</span>
              <span>•</span>
              <span>4x4 Capability</span>
              <span>•</span>
              <span>AC Standard</span>
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              The ultimate workhorse for large family reunions or corporate retreats. Designed for the most rugged terrains without compromising on passenger legroom.
            </p>
          </div>

          <div className="group">
            <div className="w-full aspect-[4/3] overflow-hidden mb-6">
              <img
                src={fleetTraveler}
                alt="Luxury 9-seater traveler coach interior with leather seats"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-3xl font-heading text-forest">Urban Nomad Traveler</h3>
            <div className="flex gap-4 mt-2 text-sm font-medium uppercase tracking-tighter text-foreground/70">
              <span>9-12 Seats</span>
              <span>•</span>
              <span>Luxury Upholstery</span>
              <span>•</span>
              <span>WiFi Enabled</span>
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Optimized for comfort during long interstate highway drives. Features individual recliners and advanced suspension for a smooth, executive feel.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/fleet"
            className="inline-flex items-center justify-center bg-forest text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-safety transition-colors"
          >
            Explore Full Fleet
          </Link>
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-forest text-sand py-24">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading text-sand mb-4">How We Move</h2>
            <p className="text-sand/70 max-w-2xl mx-auto">From day trips to cross-country expeditions, we have a service for every kind of journey.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="border-t border-sand/20 pt-8">
              <span className="text-safety font-heading text-2xl">01</span>
              <h4 className="text-4xl font-heading mt-4 mb-4">Short Getaways</h4>
              <p className="text-sand/70 font-light">
                Quick weekend escapes to the hills or the coast. Perfect for groups looking for a hassle-free private transit experience.
              </p>
              <ul className="mt-8 space-y-2 text-sm uppercase tracking-widest">
                <li>→ Day Pilgrimages</li>
                <li>→ Airport Transfers</li>
                <li>→ City Sightseeing</li>
              </ul>
            </div>

            <div className="border-t border-sand/20 pt-8">
              <span className="text-safety font-heading text-2xl">02</span>
              <h4 className="text-4xl font-heading mt-4 mb-4">Long Expeditions</h4>
              <p className="text-sand/70 font-light">
                Multi-day journeys across borders. Our cruisers are equipped with overhead racks and ample luggage space for heavy gear.
              </p>
              <ul className="mt-8 space-y-2 text-sm uppercase tracking-widest">
                <li>→ Himalayan Trails</li>
                <li>→ Desert Safaris</li>
                <li>→ Cross-State Tours</li>
              </ul>
            </div>

            <div className="border-t border-sand/20 pt-8">
              <span className="text-safety font-heading text-2xl">03</span>
              <h4 className="text-4xl font-heading mt-4 mb-4">Custom Charters</h4>
              <p className="text-sand/70 font-light">
                Tailor-made itineraries with dedicated drivers who know the hidden gems. You set the pace; we provide the power.
              </p>
              <ul className="mt-8 space-y-2 text-sm uppercase tracking-widest">
                <li>→ Event Logistics</li>
                <li>→ Film Production Support</li>
                <li>→ Wedding Caravans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-6xl md:text-8xl font-heading text-forest mb-8">
          Ready for the <span className="italic">Journey?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-forest text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-safety transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/trips"
            className="inline-flex items-center justify-center border-2 border-forest text-forest px-10 py-4 font-bold uppercase tracking-widest hover:bg-forest hover:text-white transition-colors"
          >
            View Expeditions
          </Link>
        </div>
      </section>
    </div>
  );
}
