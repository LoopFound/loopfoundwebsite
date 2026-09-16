import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Referral", href: "/referral" },
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
    <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-foreground py-3 text-background transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/10" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="group block rounded-lg" aria-label="Loop Found home">
          <img src="/images/loopfound-logo.jpg" alt="Loop Found" width="76" height="42" className="h-[42px] w-[76px] rounded-md object-cover shadow-sm transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-background/60 hover:text-background"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 rounded-full bg-background px-6 py-2.5 text-sm font-bold text-foreground transition-transform hover:scale-105"
          >
            Let's Talk
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="mx-4 mt-3 flex flex-col gap-3 rounded-2xl border border-black/10 bg-foreground p-6 text-background shadow-2xl lg:hidden animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-background hover:bg-background/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl bg-background px-4 py-3 text-center text-sm font-bold text-foreground"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
