import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "OUR WORK", href: "/projects", hasDropdown: true },
  { label: "OUR SERVICES", href: "/services" },
  { label: "OUR CAMPAIGNS", href: "/referral" },
  { label: "ABOUT US", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ffffff]/95 backdrop-blur-md shadow-sm border-b border-black/[0.08] py-3.5"
            : "bg-[#f7f7f4]/90 backdrop-blur-sm border-b border-black/[0.05] py-4 md:py-5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Full brand mark, kept at its native ratio so the artwork is never cropped. */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center rounded-[14px] border border-black/10 bg-[#07172d] p-1.5 shadow-[0_5px_18px_rgba(7,23,45,0.16)] outline-none transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_8px_24px_rgba(7,23,45,0.22)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Loop Found home"
          >
            <img
              src="/images/loopfound-logo-256.webp"
              alt=""
              width="256"
              height="144"
              className="h-10 w-auto rounded-[9px] object-contain"
            />
          </Link>

          {/* Nav Links in Center */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {links.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-200 ${
                    isActive
                      ? "text-[#151515] font-extrabold"
                      : "text-[#151515]/75 hover:text-black"
                  }`}
                >
                  <span>{l.label}</span>
                  {l.hasDropdown && (
                    <ChevronDown size={13} className="text-[#151515]/60 -mr-0.5" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button - Pill shaped GET IN TOUCH */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center rounded-full border border-black/25 bg-white/80 px-7 py-2.5 text-[12px] font-bold uppercase tracking-wider text-[#151515] shadow-[0_0_0_1px_rgba(234,179,8,0.35)] transition-all hover:border-black hover:bg-[#151515] hover:text-[#f7f7f4] hover:shadow-md"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#151515] lg:hidden hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu sheet */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="mx-4 mt-3 flex flex-col gap-2 rounded-2xl border border-black/10 bg-white p-6 text-[#151515] shadow-2xl lg:hidden animate-fade-up"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                  location.pathname === l.href
                    ? "bg-primary text-black font-extrabold"
                    : "text-[#151515]/80 hover:bg-black/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full border border-black/20 bg-[#151515] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#f7f7f4] shadow-md"
            >
              GET IN TOUCH
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
