import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book Your Force Cruiser Trip" },
      { name: "description", content: "Get a custom quote for your next trip. Contact NomadCruiser for Force Cruiser rentals, expeditions, and group travel." },
      { property: "og:title", content: "Contact — Book Your Force Cruiser Trip" },
      { property: "og:description", content: "Get a custom quote for Force Cruiser rentals and group travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-forest text-sand py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-heading mb-6">Start Your Departure</h1>
          <p className="text-xl text-sand/80 max-w-2xl mx-auto">
            Brief us on your requirements. We'll draft a custom itinerary and vehicle recommendation within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-heading text-forest mb-6">Get in Touch</h2>
            <p className="text-foreground/70 mb-12 text-pretty">
              Whether you know exactly where you're going or just want to explore the options, our team is ready to help you plan a safe and memorable journey.
            </p>
            <div className="space-y-8">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">Phone</span>
                <span className="text-lg font-medium text-foreground">+91 98290 12345</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">Email</span>
                <span className="text-lg font-medium text-foreground">expeditions@nomadcruiser.com</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">Headquarters</span>
                <span className="text-lg font-medium text-foreground">Industrial Zone 4, Block C, Jaipur, Rajasthan 302013</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">Hours</span>
                <span className="text-lg font-medium text-foreground">Mon — Sat, 08:00 — 20:00 IST</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-sm border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl font-heading text-forest mb-4">Inquiry Received</div>
                <p className="text-foreground/70">Thank you for reaching out. Our fleet team will contact you within 24 hours with a custom quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="start" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Trip Start</label>
                  <input
                    id="start"
                    type="date"
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Vehicle Choice</label>
                  <select
                    id="vehicle"
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  >
                    <option>Force Cruiser Classic</option>
                    <option>Urban Nomad Traveler</option>
                    <option>Highland 4x4 SUV</option>
                    <option>Executive Coach</option>
                    <option>Not sure — recommend</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Trip Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your destination, group size, and any special requirements..."
                    className="w-full bg-background border border-input px-4 py-3 rounded-sm text-foreground focus:ring-2 focus:ring-safety focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="md:col-span-2 bg-forest text-white font-bold uppercase tracking-widest py-4 hover:bg-safety transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
