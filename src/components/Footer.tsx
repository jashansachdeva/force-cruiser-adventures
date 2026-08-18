import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest text-sand py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-2xl font-heading tracking-wider uppercase">NomadCruiser</span>
          <p className="text-sm text-sand/70">Premium rentals for heavy terrain.</p>
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
          <Link to="/fleet" className="hover:text-safety transition-colors">Fleet</Link>
          <Link to="/trips" className="hover:text-safety transition-colors">Expeditions</Link>
          <Link to="/about" className="hover:text-safety transition-colors">About</Link>
          <Link to="/contact" className="hover:text-safety transition-colors">Contact</Link>
        </div>
        <div className="text-xs text-sand/70">
          © NomadCruiser Travel Solutions — Est. 2012
        </div>
      </div>
    </footer>
  );
}
