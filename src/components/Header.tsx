import { Link, useRouterState } from "@tanstack/react-router";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const links = [
    { to: "/fleet", label: "The Fleet" },
    { to: "/trips", label: "Expeditions" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 bg-forest px-6 py-4 flex justify-between items-center text-white">
      <Link to="/" className="text-2xl font-heading tracking-wider uppercase">
        NomadCruiser
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`transition-colors hover:text-safety ${
              pathname === link.to ? "text-safety" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="/contact"
        className="bg-safety px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-sand hover:text-forest transition-all"
      >
        Book Trip
      </Link>
    </nav>
  );
}
