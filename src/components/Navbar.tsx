import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight">
          <span className="text-foreground">Loop</span>
          <span className="text-primary">Found</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeve3ZVSZ7lKKWntNMNf172Jc-sST-WGfcmB4DbBwCaZKLTjA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:scale-105 transition-transform"
          >
            Let's Talk
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card mt-3 mx-4 rounded-2xl p-6 flex flex-col gap-3 animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeve3ZVSZ7lKKWntNMNf172Jc-sST-WGfcmB4DbBwCaZKLTjA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold text-center mt-2"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
